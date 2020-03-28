import config from '../config'
import TokenService from '../services/token-service'

const PostApiService = {
    getPosts() {
        return fetch(`${config.API_ENDPOINT}/posts`)
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    getPost(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}`)
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    getMyPosts() {
      return fetch(`${config.API_ENDPOINT}/posts/by-user`, {
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`}
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    
    createPost(newPost) {
      return fetch(`${config.API_ENDPOINT}/posts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,      },
        body: JSON.stringify({
          ...newPost
        }),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    deletePost(postId) {
      return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,  }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    deletePostAdmin(postId) {
      return fetch(`${config.API_ENDPOINT}/posts/admin/${postId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,  }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    editPost(postId, postToUpdate) {
      return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,      },
        body: JSON.stringify({
          ...postToUpdate
        }),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default PostApiService