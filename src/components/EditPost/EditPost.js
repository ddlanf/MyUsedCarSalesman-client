import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './EditPost.css'
import PostApiService from '../../services/posts-api-service'
import ImageApiService from '../../services/images-api-service'
import PostContext from '../../contexts/PostContext'

class EditPost extends Component {

    _isMounted = false;
    static contextType = PostContext

    constructor(props){
        super(props);
        this.state = { 
                    make: '',
                    model: '',
                    year: '',
                    mileage: '',
                    description: '',
                    price: '',
                    commission_amount: '',
                    city: '',
                    state: '',
                    other_terms_and_conditions : '',
                    image : '',
                    prevPost : {},
                    prevImage : '',
                    clicked: false,
                    buffer: false
        }
    }

    editPost = (ev) =>{

        this.setState({ clicked: true, error : '', })
        
        ev.preventDefault()
        const { make, model, year, 
            mileage, description, 
            commission_amount, 
            price, city, state,
            other_terms_and_conditions, image } = this.state
     
        //Server only accepts the data called "location", so form it here by combining city and state
        let location = ''

        if(city || state){
           const newCity = city ? city : this.state.prevPost.city 
           const newState = state ? state : this.state.prevPost.state 
           location = newCity.trim() + ', ' + newState.trim()
        }

        const tempPost = { make, model, year, 
            mileage, description, 
            commission_amount, 
            location, price, 
            other_terms_and_conditions }
        
        let updatedPost = {}
        for(const key in tempPost){
           
            if(tempPost[key]){
                updatedPost[key] = tempPost[key]
            }
        }
  
        const { history } = this.props
        const { postId } = this.props.match.params

        if(Object.keys(updatedPost).length){
            this.setState({ buffer: true })
           
            PostApiService.editPost(postId, updatedPost)
                .then(res=>{  
                        PostApiService.getPosts()
                        .then(posts =>{ 
                            this.context.setPosts(posts) 
                            if(!image){ history.push('/view-posts') } 
                        })
                })
                .catch(res => {
                    if(this._isMounted && res.error){ this.setState({ error: res.error, buffer: false })}
                })
        }
         
        const updatedImage = { src : image } 

        if(image){
            ImageApiService.editImage(updatedImage, postId)
                .then(() => {
                    ImageApiService.getImages()
                        .then(images =>{ 
                            this.context.setImages(images) 
                            if(!this.state.error){ history.push('/view-posts')}
                        })
                        .catch(res =>{
                            if(this._isMounted){
                                this.setState({ buffer: false, error: res.error })
                            }
                        })
                })
                .catch(res => {
                    if(this._isMounted && res.error){ this.setState({ error: res.error, buffer: false })}
                })
        }

        if(!image && !Object.keys(updatedPost).length){ history.push('/view-posts') }
    }

    handleInputChange = (event) =>{
        const { name } = event.target
        const { value } = event.target
        
        this.setState({
             [name] : value, 
             clicked: false
        })
    }

    componentDidMount(){

        this._isMounted = true;

        const { postId } = this.props.match.params

        PostApiService.getPost(postId)
            .then(post =>{
              //This adds the default values in the input fields
               post.city = post.location.slice(0, post.location.indexOf(','))
               post.state = post.location.slice(post.location.indexOf(',') + 2, post.location.length)
               this.setState({ prevPost: post })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
        ImageApiService.getImage(postId)
            .then(images =>{
               this.setState({ prevImage: images[0].src })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="edit-post">
                <section className="edit-post-form-box">
                    <form className="edit-post-form"
                        onSubmit={this.editPost}
                        >
                        <h1 className="edit-post-heading">Edit Post</h1>
                        <div className="edit-post-input-box">
                            <div className="edit-post-left">
                                <label name="edit" className="edit-post-label">Make</label>
                                <input 
                                    type="text" 
                                    className="edit-post-input"
                                    name="make"
                                    defaultValue={this.state.prevPost.make} 
                                    onChange={this.handleInputChange}/>
                                <label name="model" className="edit-post-label">Model</label>
                                <input 
                                    type="text" 
                                    className="edit-post-input"
                                    name="model"
                                    defaultValue={this.state.prevPost.model} 
                                    onChange={this.handleInputChange}/>
                                <label name="year" className="edit-post-label">Year</label>
                                <input 
                                    type="number" 
                                    className="edit-post-input"
                                    name="year"
                                    defaultValue={this.state.prevPost.year} 
                                    onChange={this.handleInputChange}/>
                                <label name="mileage" className="edit-post-label">Mileage</label>
                                <input 
                                    type="number" 
                                    className="edit-post-input"
                                    name="mileage"
                                    defaultValue={this.state.prevPost.mileage} 
                                    onChange={this.handleInputChange}/>
                                <label name="description" className="edit-post-label">Description</label>
                                <textarea 
                                    className="edit-post-description edit-post-input"
                                    name="description"
                                    defaultValue={this.state.prevPost.description} 
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className="edit-post-right">
                                <label name="price" className="edit-post-label">Price</label>
                                <input 
                                    type="number" 
                                    className="edit-post-input"
                                    name="price"
                                    defaultValue={this.state.prevPost.price} 
                                    onChange={this.handleInputChange}/>
                                <label name="commission" className="edit-post-label">Commision</label>
                                <input 
                                    type="text"
                                    className="edit-post-input edit-post-commission"
                                    name="commission_amount"
                                    defaultValue={this.state.prevPost.commission_amount} 
                                    onChange={this.handleInputChange}/>
                                <label name="location" className="edit-post-label">City</label>
                                <input 
                                   className="edit-post-input edit-post-city"
                                   name="city"
                                   type="text"
                                   defaultValue={this.state.prevPost.city} 
                                   onChange={this.handleInputChange}/>
                                <label name="location" className="edit-post-label">State</label>
                                <input 
                                    className="edit-post-input edit-post-state"
                                    name="state"
                                    type="text"
                                    defaultValue={this.state.prevPost.state} 
                                    onChange={this.handleInputChange}/>
                                <label name="terms-and-cond" className="edit-post-label">Other Terms and Conditions</label>
                                <textarea 
                                    className="edit-post-terms-and-cond edit-post-input"
                                    name="other_terms_and_conditions"
                                    defaultValue={this.state.prevPost.other_terms_and_conditions} 
                                    onChange={this.handleInputChange}/>
                                <label name="image" htmlFor="img" className="img edit-post-label">Image Link:</label>
                                <input 
                                    className="edit-post-input edit-post-image"
                                    name="image"
                                    type="text"
                                    defaultValue={this.state.prevImage} 
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        {this.state.buffer ? <p className="edit-post-buffer">Uploading please wait...</p> : (this.state.error ? <p className="edit-post-error">{this.state.error}</p> : '')}
                        <button 
                            style={{backgroundColor : this.state.clicked ?  "#645b5b"  : '#999090'}}
                            disabled={this.state.clicked} 
                            id="submit" type="submit" 
                            className="edit-post-submit">
                            Submit
                        </button>
                    </form>
                </section> 
            </div>
        )
    }
}

export default withRouter(EditPost)