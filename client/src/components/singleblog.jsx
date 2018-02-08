import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import { Link } from 'react-router-dom';
import NavBar from './navbar';
import Header from './header';
import Blog from './blog';

class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }

    componentDidMount() {
        let url = '/api/blogs/' + this.props.match.params.id;
        fetch(url, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(response => response.json())
            .then(object => {
                //CONSOLE TESTS//
                // console.log(object._created);
                //CONSOLE TESTS//
                let blog = <Blog id={object.id} title={object.title} content={object.content} created={object._created} />;
                this.setState({ blog: blog });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Header />
                <div className="container">
                    <div className="row">
                        {this.state.blog}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SingleBlog;