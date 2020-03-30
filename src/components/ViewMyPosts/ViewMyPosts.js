import React, { Component } from 'react'
import './ViewMyPosts.css'
import { Link } from 'react-router-dom'
import MyPosts from './MyPosts/MyPosts'
import PostApiService from '../../services/posts-api-service'
import ImageApiService from '../../services/images-api-service'
import PostContext from '../../contexts/PostContext'

export default class ViewMyPosts extends Component {

    static contextType = PostContext

    componentDidMount(){
        this.context.clearError()
        PostApiService.getMyPosts()
            .then(posts => this.context.setPosts(posts))
            .catch(this.context.setError)
       
        ImageApiService.getImages()
            .then(images => this.context.setImages(images))
            .catch(this.context.setError)
    }

    render() {
        return (
            <>
                 <Link
                    className="view-my-posts-link"
                    to="./make-post"
                    >
                    <button className="create-post-button"> 
                        Create Post
                    </button>
                </Link>
                <section className="view-my-posts-post-box">
                    <MyPosts
                        posts={this.context.posts}
                        images={this.context.images}
                    />
                </section>
            </>
        )
    }
}
