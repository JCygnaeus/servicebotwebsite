// api.js
import axios from 'axios'
import { API_URL } from './config.js'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
