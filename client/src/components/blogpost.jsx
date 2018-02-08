import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class BlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.addBlog = this.addBlog.bind(this);
        this.updateTitleValue = this.updateTitleValue.bind(this);
        this.updateContentValue = this.updateContentValue.bind(this);
    }

    addBlog(event) {
        fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
    }

    updateTitleValue(event) {
        this.setState({
            title: event.target.value
        })
    }

    updateContentValue(event) {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <form className="m-4 bg-light border border-dark rounded">
                        <div className="form-group m-2">
                            <label className="font-weight-bold">Blog Title</label>
                            <input type="text" className="form-control" id="blog-title" placeholder="Blog Title" onChange={this.updateTitleValue} />
                        </div>
                        <div className="form-group m-2">
                            <label className="font-weight-bold">Blog Text</label>
                            <textarea className="form-control" id="blog-text" rows="5" placeholder="Thoughts typed here." onChange={this.updateContentValue}></textarea>
                        </div>
                        <button onClick={this.addBlog} className="btn btn-primary m-2">Submit</button>
                    </form>
                </div>
            </Fragment >
        )
    }
}

export default BlogPost;