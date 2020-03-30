import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  }, 
  saveAdminAuthToken(token) {
    window.sessionStorage.setItem(config.ADMIN_TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  getAdminAuthToken() {
    return window.sessionStorage.getItem(config.ADMIN_TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  clearAdminAuthToken() {
    return window.sessionStorage.removeItem(config.ADMIN_TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  
}

export default TokenService
