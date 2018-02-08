import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import BlogPreview from './blogpreview';

class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        fetch('/api/blogs', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(response => response.json())
            .then(object => {
                //CONSOLE TESTS//
                // console.log(object[0]._created.substring(0, 10));
                // console.log(`${object[id].id} and ${object[id].content}`);
                //CONSOLE TESTS//
                let blogs = Object.keys(object).map(id => {
                    return <BlogPreview key={id} id={object[id].id} title={object[id].title} content={object[id].content} created={object[id]._created} />
                })
                this.setState({ blogs: blogs });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        {this.state.blogs}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BlogList;