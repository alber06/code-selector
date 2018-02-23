import axios from 'axios'

const api = {
  url: '/',
}

const OvBaseApi = axios.create({
  baseURL: api.url,
})

const OvApi = {
  getCodes() {
    return OvBaseApi({
      method: 'GET',
      url: 'codes.json',
    })
  },
}

export default OvApi
