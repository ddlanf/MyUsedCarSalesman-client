import React, { Component } from 'react'
import './ViewPosts.css'
import { Link } from 'react-router-dom'
import Posts from './Posts/Posts'
import PostApiService from '../../services/posts-api-service'
import ImageApiService from '../../services/images-api-service'
import PostContext from '../../contexts/PostContext'
import TokenService from '../../services/token-service'

export default class ViewPosts extends Component {
    
    static contextType = PostContext

    componentDidMount(){
        this.context.clearError()
        PostApiService.getPosts()
            .then(posts => this.context.setPosts(posts))
            .catch(this.context.setError)
       
        ImageApiService.getImages()
            .then(images => this.context.setImages(images))
            .catch(this.context.setError)
    }

    render() {
        return (
            <>
                {TokenService.hasAuthToken() ?
                <Link
                        className="view-posts-link"
                        to="./make-post"
                        >
                      <button className="create-post-button"> 
                        Create Post
                      </button>
                </Link>
                :
                <Link
                        className="view-posts-link"
                        to="./login"
                        >
                      <button className="create-post-button"> 
                        Create Post
                      </button>
                </Link>}
                <section className="view-posts-post-box">
                    <Posts
                        posts={this.context.posts}
                        images={this.context.images}
                    />
                </section>
            </>
        )
    }
}
