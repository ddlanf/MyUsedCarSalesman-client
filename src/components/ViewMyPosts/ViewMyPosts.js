import React, { Component } from 'react'
import './ViewMyPosts.css'
import { Link } from 'react-router-dom'
import MyPosts from './MyPosts/MyPosts'

export default class ViewMyPosts extends Component {
    render() {
        return (
            <>
                <section className="view-posts-post-box">
                    <MyPosts/>
                </section>
                <button className="create-post-button"> 
                    <Link
                        className="view-my-post-link"
                        to="./make-post"
                        >
                        Create Post
                    </Link>
                </button>
            </>
        )
    }
}
