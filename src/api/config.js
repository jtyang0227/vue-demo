import axios from 'axios';
import router from '../router';

const DOMAIN = 'http://localhost:3000';
const UNAUTHORIZED = 401;

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  })
    .then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHORIZED)
        return onUnauthroized()
      throw Error(result)
    })
}


//user 리스트를 요청 하는 함수 구현
export const users = {
  fetch() {
    return request('get','/users')
  },
  create(name){
    return request('post','/users',{name})
  }
}

//로그인 요청
export const auth = {
  login(email,password) {
    return request('post','/login',{email,password})
  }
}

//set header token
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;

}

export const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
export const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
