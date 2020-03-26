import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PostApiService from '../../services/posts-api-service'
import ImageApiService from '../../services/images-api-service'
import UserApiService from '../../services/users-api-service'
import PostContext from '../../contexts/PostContext'
import TokenService from '../../services/token-service'
import './ViewPost.css'

class ViewPost extends Component {

    static contextType = PostContext

    state = { clicked : false, email: ''}
    
    buttonClicked = () =>{
        this.setState({clicked : true})
        if(TokenService.hasAuthToken()){
            UserApiService.getUserEmail(this.context.post.user_name)
                .then(email => this.context.setEmail(email))
                .then(this.context.setEmail(''))
                .catch(
                    this.context.setError 
                )
        }
        else{ this.props.history.push('/login')}
    }

    componentDidMount(){
        const { postId } = this.props.match.params;
       
        this.context.clearError()
        PostApiService.getPost(postId)
            .then(post =>{ 
                this.context.setPost(post)
            })
            .catch(this.context.setError)

        ImageApiService.getImage(postId)
            .then(images => this.context.setImages(images))
            .catch(this.context.setError)
    
    }


    render() {

        const imageDefault = [{ "src": "", "alt":"" }]
        const  image =  this.context.images ? this.context.images : imageDefault
        const  carInfo = this.context.post
       
        return (
            <>
                <section className="view-post-box">
                    <h1 className="view-post-carInfo-name">{carInfo.make} {carInfo.model} {carInfo.year} </h1>
                    <h2 className="view-post-carInfo-price">${carInfo.price}</h2>
                    <img
                            className="view-post-image"
                            src={image[0].src}
                            alt={image[0].alt}
                    />
                    <h3 className="view-post-carInfo-commission">{carInfo.commission_amount}</h3>
                    <ul className="view-post-info">
                        <li>Make:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.make}
                            </div>
                        </li>
                        <li>Model:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.model}
                            </div>
                        </li>            
                        <li>Year:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.year}
                            </div>
                        </li>            
                        <li>Mileage:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.mileage}
                            </div>
                        </li>            
                        <li>Description:</li>
                        <li>
                            <div className="view-post-text-box description">
                                {carInfo.description}
                            </div>
                        </li>            
                        <li>Price:</li>
                        <li>
                            <div className="view-post-text-box">
                                ${carInfo.price}
                            </div>
                        </li>
                        <li>Commission:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.commission_amount}
                            </div>
                        </li>
                        <li>Location:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.location}
                            </div>
                        </li>
                        <li>Other terms and conditions:</li>
                        <li>
                            <div className="view-post-text-box terms-cond">
                                {carInfo.other_terms_and_conditions}
                            </div>
                        </li>
                        <li>Posted By:</li>
                        <li>
                            <div className="view-post-text-box">
                                {carInfo.user_name}  
                            </div>
                        </li>
                    </ul>
                    <button className="view-post-contact-button"
                        onClick={this.buttonClicked}
                        >
                        Contact Owner
                    </button>
                    {this.state.clicked ? <div className="view-post-user-email">{this.context.email}</div> : ''}
                </section>
            </>
        )
    }
}


export default withRouter(ViewPost)