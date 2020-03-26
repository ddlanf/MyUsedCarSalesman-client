import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostApiService from '../../../services/posts-api-service'
import PostContext from '../../../contexts/PostContext'
import './MyPosts.css'

export default class MyPosts extends Component {

    static contextType = PostContext

    deletePost = (postId) => {
        this.context.clearError()
        PostApiService.deletePost(postId)
            .then(this.context.deletePost(postId))
            .catch(this.context.setError)
    }

    rendorPosts(){
        const { images } = this.props
        const thumbNailDefault = [{ "src": "", "alt":"" }]
        const userPosts = this.props.posts

        const posts = userPosts.map(post => {
                let thumbNail = images.filter(image => image.post_id === post.id)[0] || thumbNailDefault;
                return (
                            <div
                                className="view-my-posts-post"
                                to={`/view-my-posts/${post.id}`}
                                key={post.id} 
                                >
                                <div 
                                    className="view-my-posts-car-image-box">
                                    {<img 
                                        className="view-my-posts-car-image"
                                        src={thumbNail.src}
                                        alt={thumbNail.alt}
                                    />}
                                </div>
                                <ul
                                    className="view-my-posts-lists">
                                    <li>{post.make} {post.model} {post.year}</li>
                                    <li>Price:  ${post.price}</li>
                                    <li><span className="break">Commission:</span>{post.commission_amount}</li>
                                    <li>{post.location}</li>
                                    <li>
                                        <Link
                                            className="view-my-post-link"
                                            to={`./edit-post/${post.id}`}
                                            >
                                            <button className="view-my-posts-edit">Edit</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button 
                                            className="view-my-posts-edit"
                                            onClick={() => this.deletePost(post.id)}
                                            >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
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

MyPosts.defaultProps = {
    posts: [],
    images: []
  };

