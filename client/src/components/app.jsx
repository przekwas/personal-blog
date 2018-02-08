import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FrontPage from './frontpage';
import PostPage from './postpage';
import SingleBlog from './singleblog';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={FrontPage} />
                        <Route exact path="/post" component={PostPage} />
                        <Route exact path="/api/blogs/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;