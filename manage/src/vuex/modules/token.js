import login from '../../api/login'
import * as types from '../mutation-types'

const state = {
  token: sessionStorage.getItem('token')
}

// actions
const actions = {
  createToken ({ commit }, {name, password}) {
    return login.createToken(name, password).then( res => {
      if (res.success) {
        commit(types.RECEIVE_TOKEN, res.data.token)
      }
      return res
    })
  },
  delToken ({ commit }){
      commit(types.DELETE_TOKEN)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TOKEN] (state, token ) {
    sessionStorage.setItem('token',token);
    state.token = token
  },

  [types.DELETE_TOKEN] (state) {
    sessionStorage.removeItem('token')
    state.token = null
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}