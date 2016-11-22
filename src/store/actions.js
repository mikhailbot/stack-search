import * as types from './mutation-types'
import * as api from '../stackoverflow'

export const updateSearchInput = ({ commit }, payload) => {
  commit(types.SEARCH_INPUT_UPDATE, payload)
}

export const clearSearchInput = ({ commit }) => {
  commit(types.SEARCH_INPUT_CLEAR)
}

export const searchStackOverflow = ({ commit, state }) => {
  api.search(state.search)
    .then((response) => {
      commit(types.RESULTS_SUCCESS, response.data)
    })
    .catch((error) => {
      console.log({ error })
      commit(types.RESULTS_FAILURE, error)
    })
}
