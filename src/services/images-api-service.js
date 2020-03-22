import config from '../config'

const ImageApiService = {
    getImages() {
        return fetch(`${config.API_ENDPOINT}/images`)
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    getImage(postId) {
        return fetch(`${config.API_ENDPOINT}/images/${postId}`)
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
}

export default ImageApiService