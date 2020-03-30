import React, { Component } from 'react'
import './MakePost.css'
import PostApiService from '../../services/posts-api-service'
import ImageApiService from '../../services/images-api-service'
import PostContext from '../../contexts/PostContext'

export default class MakePost extends Component {

    static contextType = PostContext

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
                    image : '',
                    clicked: false,
                    buffer: false
        }
    }

    
    createPost = (ev) =>{

        this.setState({ clicked: true })

        ev.preventDefault()
        const { make, model, year, 
            mileage, description, 
            commission_amount, 
            location, price, 
            other_terms_and_conditions, image} = this.state
        
        const newPost = { make, model, year, 
            mileage, description, 
            commission_amount, 
            location, price, 
            other_terms_and_conditions }
        
            let validPost = true

            for(let [key, value] of Object.entries(newPost)){
                if(value == null || value === ''){
                   this.setState({error : `Please enter ${key}`})
                   validPost = false
            }
               
                if(image === ''){
                    this.setState({error : `Please enter image link`})
                    validPost = false
                }
            }

            if(validPost){
                this.setState({ buffer: true })
                PostApiService.createPost(newPost)
                    .then(post=> {
                        const newImage = { 
                            post_id: post.id, 
                            alt: [post.make, post.model, post.year].join(' '), 
                            src: this.state.image 
                        }
                        ImageApiService.postImage(newImage)
                            .then(() =>{
                                this.context.clearError()
                                PostApiService.getPosts()
                                    .then(posts => { 
                                        this.context.setPosts(posts)
                                        ImageApiService.getImages()
                                             .then(images => { 
                                                 this.context.setImages(images) 
                                                 this.props.history.push('/view-posts')
                                              })
                                             .catch(this.context.setError)
                                    })
                                    .catch(this.context.setError)
                            })
                            .catch(res => { 
                                this.setState({ buffer: false, error: res.error })
                            })
                    })
                    .catch(res => {
                       this.setState({ buffer: false, error: res.error })
                    })
            }

    }

    handleInputChange = (event) =>{

        this.setState({ clicked: false })

        const { name } = event.target
        const { value } = event.target
        
        this.setState({
             [name] : value 
        })
        
    }

    componentDidMount(){
        this.setState({ buffer: false, error: '' })
    }

    render() {
        return (
            <div className="make-post">
                <section className="make-post-form-box">
                    <form className="make-post-form"
                        onSubmit={this.createPost}
                        >
                         <h1 className="make-post-heading">Create Post</h1>
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
                                    type="number" 
                                    className="make-post-input"
                                    name="year"
                                    onChange={this.handleInputChange}/>
                                <label name="mileage" className="make-post-label">Mileage</label>
                                <input 
                                    type="number" 
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
                                    type="number" 
                                    className="make-post-input"
                                    name="price"
                                    onChange={this.handleInputChange}/>
                                <label name="commission" className="make-post-label">Commision (Ex: 20%)</label>
                                <input 
                                    className="make-post-input make-post-commission"
                                    name="commission_amount"
                                    onChange={this.handleInputChange}/>
                                <label name="location" className="make-post-label">Location (City, State)</label>
                                <input 
                                    className="make-post-input make-post-location"
                                    name="location"
                                    type="text"
                                    list="locations"
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
                        {this.state.buffer ? <p className="make-post-buffer">{this.state.buffer}</p> : (this.state.error ? <p className="make-post-error">{this.state.error}</p> : '')}
                        <button disabled={this.state.clicked} id="submit" type="submit" className="make-post-submit">Submit</button>
                    </form>
                </section> 
            </div>
        )
    }
}
