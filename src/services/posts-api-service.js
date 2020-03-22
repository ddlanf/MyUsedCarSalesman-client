import config from '../config'

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
}

export default PostApiService