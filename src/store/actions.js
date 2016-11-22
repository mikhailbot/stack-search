import * as types from './mutation-types'

export const updateSearchInput = ({ commit }, payload) => {
  commit(types.SEARCH_INPUT_UPDATE, payload)
}

export const clearSearchInput = ({ commit }) => {
  commit(types.SEARCH_INPUT_CLEAR)
}
