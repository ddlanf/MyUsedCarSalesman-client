import config from '../config'
import TokenService from '../services/token-service'

const UserApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'authorization': `bearer ${TokenService.getAdminAuthToken()}`,      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAdminAuthToken()}`,      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUserEmail(userName) {
    return fetch(`${config.API_ENDPOINT}/users/user-emails/${userName}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,   },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteUser(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAdminAuthToken()}`,   },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  blockUser(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAdminAuthToken()}`,   },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default UserApiService
