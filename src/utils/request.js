import store from '@/store'
import axios from 'axios'

const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

myAxios.interceptors.request.use((config) => {
  if (store.state.token) config.headers.Authorization = store.state.token
  return config
}, (error) => {
  return Promise.reject(error)
})

export default myAxios
