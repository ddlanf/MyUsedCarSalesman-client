import React, { Component } from 'react'
import './ViewPosts.css'
import { Link } from 'react-router-dom'
import Posts from './Posts/Posts'

export default class ViewPosts extends Component {
    render() {
        return (
            <>
                <section className="view-posts-post-box">
                    <Posts/>
                </section>
                <button className="create-post-button"> 
                    <Link
                        className="view-posts-link"
                        to="./make-post"
                        >
                        Create Post
                    </Link>
                </button>
            </>
        )
    }
}
