import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            backgroundImage: "url('https://contact-centres.com/wp-content/uploads/2017/06/tech.image_.june_.2017.jpg')"
        };

        return (
            <Fragment>
                <header className="masthead" style={style}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Codeventures</h1>
                                    <span className="subheading">A Blog to what and how I learn as a coder.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;