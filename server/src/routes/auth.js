import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';

let router = Router();

router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.log('\x1b[41m%s\x1b[0m', 'Router Error: ', err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

export default router;