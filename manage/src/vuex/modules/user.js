import login from '../../api/login'
import * as types from '../mutation-types'

const state = {
  username: '',
  id: '',
  token: sessionStorage.getItem('token')
}

// actions
const actions = {
  login ({ commit }, user) {
    commit(types.LOGIN, user)
  },
  logout ({ commit }){
      commit(types.LOGOUT)
      commit(types.DELETE_TOKEN)
  },
  createToken ({ commit }, {name, password}) {
    return login.createToken(name, password).then( res => {
      if (res.success) {
        commit(types.RECEIVE_TOKEN, res.data.token)
      }
      return res
    })
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

  [types.LOGIN] (state, user) {
    state.username = user.name
    state.id = user.uid
  },

  [types.LOGOUT] (state) {
    state.username = ''
    state.id = ''
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}