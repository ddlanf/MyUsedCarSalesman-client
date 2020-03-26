import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'

export default class Posts extends Component {

    rendorPosts(){
        const { images } = this.props
        const thumbNailDefault = [{ "src": "", "alt":"" }]
        const userPosts = this.props.posts

        const posts = userPosts.map(post => {
                let thumbNail = images.filter(image => image.post_id === post.id)[0] || thumbNailDefault;
                return (
                            <Link
                                className="view-posts-post"
                                to={`/view-posts/${post.id}`}
                                key={post.id} 
                                >
                                <div 
                                    className="view-posts-car-image-box">
                                    {<img 
                                        className="view-posts-car-image"
                                        src={thumbNail.src}
                                        alt={thumbNail.alt}
                                    />}
                                </div>
                                <ul
                                    className="view-posts-lists">
                                    <li>{post.make} {post.model} {post.year}</li>
                                    <li>Price:  ${post.price}</li>
                                    <li><span className="break">Commission:</span>{post.commission_amount}</li>
                                    <li>{post.location}</li>
                                </ul>
                            </Link>
                )
            })

        return posts;
    }

    render() {
        return (
            <>
                {this.rendorPosts()}
            </>
        )
    }
}

Posts.defaultProps = {
    posts: [],
    images: []
  };