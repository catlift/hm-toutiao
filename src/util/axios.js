import axios from 'axios'

// 调用 axios.create() 方法，创建 axios 实例对象
const require = axios.create({
  baseURL: '/api/',
  timeout: 3000,
  Headers: { 'Content-Type': 'application/json' }
})

require.interceptors.request.use((config) => {
  // config.headers['token'] = '01234567890';
  return config
})

require.interceptors.response.use((data) => {
  return data
})

export default require
