import axios from 'axios'

const axiosConfig = axios.create({baseURL: 'https://dummyjson.com/users'})

export default axiosConfig

