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
    constructor(props){
        super(props)
        this.state = { clicked : false, email: ''}
    }
   
    
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
        else{ this.props.history.push('/login') }
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
        
        const  image =  this.context.images.length ? this.context.images : imageDefault
        const  carInfo = this.context.post
       
        return (
            <>
                <section className="view-post-box">
                    <div className="view-post-desk-top-view-box">
                        <h1 className="view-post-carInfo-name"> {carInfo.year} {carInfo.make} {carInfo.model}</h1>
                        <h2 className="view-post-carInfo-price">${carInfo.price}</h2>
                        <img
                                className="view-post-image"
                                src={image[0].src ? image[0].src : require('../../Utils/myusecarsalesman_pics/notfound.png') }
                                alt={image[0].alt ? image[0].alt : 'Not Found' }
                        />
                        <h3 className="view-post-carInfo-commission">{carInfo.commission_amount}</h3>
                    </div>
                    <div className="view-post-desk-top-view-box-two">
                        <ul className="view-post-info">
                            <div className="view-post-desk-top-view-list-box">
                                <li><span className="view-post-text-box-label">Make</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.make}
                                    </div>
                                </li>
                                <li><span className="view-post-text-box-label">Model</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.model}
                                    </div>
                                </li>            
                                <li><span className="view-post-text-box-label">Year</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.year}
                                    </div>
                                </li>            
                                <li><span className="view-post-text-box-label">Mileage</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.mileage}
                                    </div>
                                </li>            
                                <li><span className="view-post-text-box-label">Description</span></li>
                                <li>
                                    <div className="view-post-text-box description">
                                        {carInfo.description}
                                    </div>
                                </li>         
                            </div>   
                            <div className="view-post-desk-top-view-list-box-two">
                                <li><span className="view-post-text-box-label">Price</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        ${carInfo.price}
                                    </div>
                                </li>
                                <li><span className="view-post-text-box-label">Commission</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.commission_amount}
                                    </div>
                                </li>
                                <li><span className="view-post-text-box-label">Location</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.location}
                                    </div>
                                </li>
                                <li><span className="view-post-text-box-label">Other terms and conditions</span></li>
                                <li>
                                    <div className="view-post-text-box terms-cond">
                                        {carInfo.other_terms_and_conditions}
                                    </div>
                                </li>
                                <li><span className="view-post-text-box-label">Posted By</span></li>
                                <li>
                                    <div className="view-post-text-box">
                                        {carInfo.user_name}  
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <button 
                        className="view-post-contact-button"
                        onClick={this.buttonClicked}>
                            Contact Owner
                    </button>
                    {this.state.clicked ? <div className="view-post-user-email">{this.context.email}</div> : ''}
                </section>
            </>
        )
    }
}


export default withRouter(ViewPost)