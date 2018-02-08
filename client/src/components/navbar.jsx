import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand font-weight-bold" href="#">Developing as a Developer</a>
                        <button className="navbar-toggler navbar-toggler-right text-white" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto text-uppercase font-weight-bold">
                                <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/post">Post</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default NavBar;