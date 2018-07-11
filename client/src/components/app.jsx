import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FrontPage from './frontpage';
import PostPage from './postpage';
import SingleBlog from './singleblog';

import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={FrontPage} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/api/blogs/:id" component={SingleBlog} />
                        <Route exact path="/post" component={PostPage} />
                        {/* <PrivateRoute exact path="/post" component={PostPage} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;