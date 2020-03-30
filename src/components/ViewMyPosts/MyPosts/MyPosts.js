import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostApiService from '../../../services/posts-api-service'
import PostContext from '../../../contexts/PostContext'
import './MyPosts.css'

export default class MyPosts extends Component {

    static contextType = PostContext

    state = { clicked : [] }

    deleteClicked = (id) =>{
        let cloneArray = this.state.clicked
        cloneArray.push(id)
        this.setState({ clicked : cloneArray })
        console.log(cloneArray)
    }

    deletePost = (postId) => {
        this.context.clearError()
        PostApiService.deletePost(postId)
            .then(this.context.deletePost(postId))
            .catch(this.context.setError)
    }

    componentDidMount(){
        this.setState({ clicked: [] })
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
                        <p className="view-my-posts-car-name">{post.year} {post.make} {post.model}</p>
                        <div 
                            className="view-my-posts-car-image-box">
                            {<img 
                                className="view-my-posts-car-image"
                                src={thumbNail.src ? thumbNail.src : require('../../../Utils/myusecarsalesman_pics/notfound.png')}
                                alt={thumbNail.alt ? thumbNail.alt : "Not Found"}
                            />}
                        </div>
                        <ul
                            className="view-my-posts-lists">
                            <li>
                                <p className="view-my-posts-car-location">
                                {post.location}
                                </p>
                            </li>
                            <li>
                                <p className="view-my-posts-car-price">
                                    ${post.price}
                                </p>
                            </li>
                            <li>
                                <p className="view-my-posts-car-commission">
                                    <span className="view-my-post_commision-title">Commission</span>
                                    {post.commission_amount}
                                </p>
                            </li>
                            <li>
                                <Link
                                    className="view-my-post-link"
                                    to={`./edit-post/${post.id}`}
                                    >
                                           <button className="view-my-posts-button">Edit</button>
                                </Link>
                            </li>
                            <li>
                                {this.state.clicked.includes(post.id) ?
                                <>
                                <button 
                                    className="view-my-posts-button"
                                    onClick={() => this.deletePost(post.id)}
                                    >
                                    Delete
                                </button>
                                <p className="view-my-confirm-delete">Are you sure?</p>
                                </>
                                :
                                <button 
                                    className="view-my-posts-button"
                                    onClick={() => this.deleteClicked(post.id)}
                                    >
                                    Delete
                                </button>}
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


