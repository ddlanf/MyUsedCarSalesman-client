import config from '../config'
import TokenService from '../services/token-service'

const ReportApiService = {
    getReports(){
        return fetch(`${config.API_ENDPOINT}/reports`, {
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,      },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    }
}

export default ReportApiService