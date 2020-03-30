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
                                <p className="view-posts-car-name">{post.year} {post.make} {post.model}</p>
                                <div 
                                    className="view-posts-car-image-box">
                                    {<img 
                                        className="view-posts-car-image"
                                        src={thumbNail.src ? thumbNail.src : require('../../../Utils/myusecarsalesman_pics/notfound.png')}
                                        alt={thumbNail.alt ? thumbNail.alt : "Not Found"}
                                    />}
                                </div>
                                <ul
                                    className="view-posts-lists">
                                     <li>
                                        <p className="view-posts-car-location">
                                         {post.location}
                                        </p>
                                    </li>
                                    <li>
                                        <p className="view-posts-car-price">
                                            ${post.price}
                                        </p>
                                    </li>
                                    <li>
                                        <p className="view-posts-car-commission">
                                            <span className="view-post_commision-title">Commission</span>
                                            {post.commission_amount}
                                        </p>
                                    </li>
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