import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { dummyData } from '../../dummyData'
import './Posts.css'

export default class Posts extends Component {

    rendorPosts(){
        const { userPosts } = dummyData;
        
        const posts = userPosts.map(post => {
            return (
                        <Link
                            className="view-posts-post"
                            to={`/view-posts/${post.id}`}
                            key={post.id} 
                            >
                            <div 
                                className="view-posts-car-image-box">
                                <img 
                                    className="view-posts-car-image"
                                    src={post.image.src[0]}
                                    alt={post.alt}
                                />
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
