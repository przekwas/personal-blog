import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';
import NavBar from '../navbar';
import Header from '../header';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({ redirectToReferrer: true, checkingLogin: false });
                } else {
                    this.setState({ checkingLogin: false });
                }
            });
    }

    login(event) {
        event.preventDefault();
        userService.login(this.state.email, this.state.password)
            .then(() => {
                this.setState({ redirectToReferrer: true });
            }).catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking worthiness ..." />;
        }
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Fragment>
                <NavBar />
                <Header />
                <div className="container">
                    <form onSubmit={(e) => this.login(e)} className="m-4 bg-light border border-dark rounded">
                        <div className="form-group m-2">
                            <label htmlFor="email">Email</label>
                            <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                        </div>
                        <div className="form-group m-2">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                        </div>
                        {this.state.feedbackMessage ? (
                            <p>{this.state.feedbackMessage}</p>
                        ) : null}
                        <input type="submit" value="Login" className="btn btn-primary m-2" />
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default Login;