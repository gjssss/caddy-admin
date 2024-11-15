import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  baseURL: '/caddy',
  timeout: 3000,
})

// 请求拦截
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use((res) => {
  return Promise.resolve(res)
}, (error) => {
  return Promise.reject(error)
})

export default service
