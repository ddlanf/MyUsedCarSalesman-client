import React, { Component } from 'react'
import './MakePost.css'
import PostApiService from '../../services/posts-api-service'
import ImageApiService from '../../services/images-api-service'
export default class MakePost extends Component {

    constructor(props){
        super(props);
        this.state = { 
                    make: '',
                    model: '',
                    year: null,
                    mileage: null,
                    description: '',
                    price: null,
                    commission_amount: '',
                    location: '',
                    other_terms_and_conditions : '',
                    user_id: 1,
                    image : ''
        }
    }

    
    createPost = (ev) =>{
        ev.preventDefault()
        const { make, model, year, 
            mileage, description, 
            commission_amount, 
            location, price, 
            other_terms_and_conditions } = this.state
        
        const newPost = { make, model, year, 
            mileage, description, 
            commission_amount, 
            location, price, 
            other_terms_and_conditions }
        
            PostApiService.createPost(newPost)
                .then(post=> {
                
                    const newImage = { 
                        post_id: post.id, 
                        alt: [post.make, post.model, post.year].join(' '), 
                        src: this.state.image 
                    }
                    ImageApiService.postImage(newImage)
                        .then(this.props.history.push('/view-posts'))
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })

    }

    handleInputChange = (event) =>{
        const { name } = event.target
        const { value } = event.target
        
        this.setState({
             [name] : value 
        })
        
    }

    render() {
        return (
            <div className="make-post">
                <h1 className="make-post-heading">Create Post</h1>
                <section className="make-post-form-box">
                    <form className="make-post-form"
                        onSubmit={this.createPost}
                        >
                        <div className="make-post-input-box">
                            <div className="make-post-left">
                                <label name="make" className="make-post-label">Make</label>
                                <input 
                                    type="text" 
                                    className="make-post-input"
                                    name="make" 
                                    onChange={this.handleInputChange}/>
                                <label name="model" className="make-post-label">Model</label>
                                <input 
                                    type="text" 
                                    className="make-post-input"
                                    name="model"
                                    onChange={this.handleInputChange}/>
                                <label name="year" className="make-post-label">Year</label>
                                <input 
                                    type="text" 
                                    className="make-post-input"
                                    name="year"
                                    onChange={this.handleInputChange}/>
                                <label name="mileage" className="make-post-input">Mileage</label>
                                <input 
                                    type="text" 
                                    className="make-post-input"
                                    name="mileage"
                                    onChange={this.handleInputChange}/>
                                <label name="description" className="make-post-label">Description</label>
                                <textarea 
                                    className="make-post-description make-post-input"
                                    name="description"
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className="make-post-right">
                                <label name="price" className="make-post-label">Price</label>
                                <input 
                                    type="text" 
                                    className="make-post-input"
                                    name="price"
                                    onChange={this.handleInputChange}/>
                                <label name="commission" className="make-post-label">Commision</label>
                                <input 
                                    className="make-post-input make-post-commission"
                                    name="commission_amount"
                                    onChange={this.handleInputChange}/>
                                <label name="location" className="make-post-label">Location</label>
                                <input 
                                    className="make-post-input make-post-location"
                                    name="location"
                                    onChange={this.handleInputChange}/>
                                <label name="terms-and-cond" className="make-post-label">Other Terms and Conditions</label>
                                <textarea 
                                    className="make-post-terms-and-cond make-post-input"
                                    name="other_terms_and_conditions"
                                    onChange={this.handleInputChange}/>
                                <label name="image" htmlFor="img" className="img make-post-label">Image Link:</label>
                                <input 
                                    className="make-post-input make-post-image"
                                    name="image"
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <button id="submit" type="submit" className="make-post-submit">Submit</button>
                    </form>
                </section> 
            </div>
        )
    }
}
