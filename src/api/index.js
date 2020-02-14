import axios from 'axios'
import store from '@/store'
import { Config } from '@/config'

axios.defaults.timeout = 10000
axios.defaults.transformResponse = [data => JSON.parse(data)]
axios.defaults.baseURL = Config.serverApi

axios.interceptors.request.use(
  config => {
    if (store.getters.getAuthorization() !== '') {
      config.headers.Authorization = store.getters.getAuthorization()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

export const signInApi = params => {
  return axios.post(`/ap/sign-in`, params).then(res => res)
}
