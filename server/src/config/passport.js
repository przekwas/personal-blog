import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Table from '../table';
import { encode, decode } from '../utils/tokens';

let authorsTable = new Table('authors');
let tokensTable = new Table('tokens');

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    }, (email, password, done) => {
        authorsTable.find({ email })
            .then((results) => results[0])
            .then((author) => {
                if (author && author.password && author.password === password) {
                    tokensTable.insert({
                        userid: author.id
                    })
                        .then((idObj) => encode(idObj.id))
                        .then((token) => {
                            return done(null, { token });
                        });
                } else {
                    return done(null, false, { message: 'Invalid Credentials fam' });
                }
            }).catch((err) => {
                return done(err);
            });
    }));

    passport.use(new BearerStrategy((token, done) => {
        let tokenId = decode(token);
        if (!tokenId) {
            return done(null, false, { message: 'Invalid Token fam' });
        }
        tokensTable.getOne(tokenId)
            .then((tokenRecord) => {
                return authorsTable.getOne(tokenRecord.userid);
            }).then((author) => {
                if (author) {
                    delete author.password;
                    return done(null, author);
                } else {
                    return done(null, false, { message: 'Invalid Token fam' });
                }
            }).catch((err) => {
                return done(err);
            });
    }));

    app.use(passport.initialize());

}

export default configurePassport;