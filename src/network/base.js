import axios from 'axios'
import Qs from 'qs'

const baseURL = (
  process.env.NODE_ENV !== 'development' ? ''
    : 'https://www.easy-mock.com/mock/5b9c752c9c53ef2876d2929a/shop'
)

export default axios.create({
  baseURL: baseURL,
  paramsSerializer: function (params) {
    return Qs.stringify(params)
  },
  // timeout: 2000,
  responseType: 'json',
  responseEncoding: 'utf8',
})