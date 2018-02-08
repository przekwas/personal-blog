import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import NavBar from './navbar';
import Header from './header';
import BlogPost from './blogpost';

class FrontPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Header />
                <BlogPost />
            </Fragment>
        )
    }
}

export default FrontPage; 