import Axios from 'axios'

Axios.defaults.baseURL = 'https://api.stackexchange.com/2.2'

const search = (query) => {
  return Axios.get(`/search?order=desc&sort=activity&site=stackoverflow&intitle=${query.keywords}`)
}

export { search }
