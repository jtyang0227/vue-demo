import axios from 'axios'
import urlInit from '../config/urlInit'

const token = document.head.querySelector('meta[name="csrf-token"]') || ''

export default axios.create({
  baseURL: urlInit.webBaseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': token
  }
})
