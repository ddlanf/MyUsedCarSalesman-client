import React, { Component } from 'react'
import { dummyData } from '../../dummyData'
import { Link } from 'react-router-dom'
import './MyPosts.css'

export default class MyPosts extends Component {

    rendorPosts = () => {

        const userId = 2;
        
        const { userPosts } = dummyData;
       
        const myPosts = userPosts
            .filter(post => parseInt(post.user_id) === userId)
            .map(post => {
           
                return(
                            <div
                                to={`/view-my-posts/${post.id}`}
                                key={"mypost" + post.id} 
                                className="view-my-posts-post"
                                >
                                <div 
                                    className="view-my-posts-car-image-box">
                                    <img 
                                        className="view-my-posts-car-image"
                                        src={post.image.src[0]}
                                        alt={post.alt}
                                    />
                                </div>
                                <ul className="view-my-posts-lists">
                                    <li>{post.make} {post.model} {post.year}</li>
                                    <li>Price  ${post.price}</li>
                                    <li><span className="break">Commission</span>{post.commission_amount}</li>
                                    <li>{post.location}</li>
                                    <li>
                                        <Link
                                            className="view-my-post-link"
                                            to='./edit-post'
                                            >
                                            <button className="view-my-posts-edit">Edit</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                )
             })

        return myPosts;
    }

    render() {


        return (
            <>
                {this.rendorPosts()}
            </>
        )
    }
}
