import React, { Component } from 'react'

const PostContext = React.createContext({
  posts: [],
  images: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPosts: () => {},
  clearPosts: () => {},
  setImage: () => {},
})

export default PostContext

export class PostProvider extends Component {

  state = {
    posts: [],
    error: null,
  };
 
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPosts = posts => {
    this.setState({ posts })
  }

  setImages = images => {
    this.setState({ images })
  }

  clearPosts = () => {
    this.setPosts([])
    this.setComments([])
  }

  render() {
    const value = {
      posts: this.state.posts,
      images: this.state.images,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPosts: this.setPosts,
      setImages: this.setImages,
      clearArticle: this.clearArticle,
    }
    return (
      <PostContext.Provider value={value}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}
