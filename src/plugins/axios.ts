import LocalStorageService from '@/services/LocalStorageService'
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_TCL_API,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

instance.interceptors.request.use(
  (config) => {
    const authToken = LocalStorageService.getAuthToken()
    const language = LocalStorageService.getLanguage()

    if (authToken) {
      config.headers['authToken'] = authToken
    }
    if (language) {
      config.headers['Accept-Language'] = language
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
