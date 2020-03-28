import React, { Component } from 'react'

const PostContext = React.createContext({
  posts: [],
  post: [],
  images: [],
  image: [],
  email: '',
  error: null,
  setError: () => {},
  clearError: () => {},
  setPosts: () => {},
  setPost: () => {},
  deletePost: () => {},
  clearPosts: () => {},
  setImages: () => {},
  setEmail: () => {}
})

export default PostContext

export class PostProvider extends Component {

  state = {
    posts: [],
    post: [],
    error: null,
  };
 
  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPosts = posts => {
    this.setState({ posts })
  }

  setPost = post => {
    this.setState({ post })
  }

  deletePost = id => {
    const posts = this.state.posts.filter(post => post.id !== id)  
    this.setState({ posts })
  }

  setImages = images => {
    this.setState({ images })
  } 

  setEmail = email => {
    this.setState({ email })
  }

  clearPosts = () => {
    this.setPosts([])
    this.setImages([])
  }

  render() {
    const value = {
      posts: this.state.posts,
      post: this.state.post,
      images: this.state.images,
      image: this.state.image,
      email: this.state.email,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPosts: this.setPosts,
      setPost: this.setPost,
      deletePost: this.deletePost,
      setImages: this.setImages,
      setEmail: this.setEmail,
      clearArticle: this.clearArticle,
    }
    return (
      <PostContext.Provider value={value}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}
