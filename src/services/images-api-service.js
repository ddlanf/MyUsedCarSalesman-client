import config from '../config'
import TokenService from '../services/token-service'

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
    postImage(newImage) {
    return fetch(`${config.API_ENDPOINT}/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,      },
      body: JSON.stringify({
        ...newImage
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  editImage(newImage, postId) {
    return fetch(`${config.API_ENDPOINT}/images/${postId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,      },
      body: JSON.stringify({
        ...newImage
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ImageApiService