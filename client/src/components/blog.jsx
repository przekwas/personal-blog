import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import { Link } from 'react-router-dom';

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dateBlogged = (this.props.created).substring(0, 10);
        return (
            <Fragment>
                <div className="col-12">
                    <div className="card m-2">
                        <h4 className="card-header">{this.props.title}</h4>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Tags Placeholder</h6>
                            <p className="card-text">{this.props.content} ... </p>
                            <footer className="blockquote-footer">{dateBlogged} by <cite>Author Placeholder</cite></footer>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Blog;