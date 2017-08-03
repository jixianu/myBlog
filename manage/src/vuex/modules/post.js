import post from '../../api/post'
import * as types from '../mutation-types'

const state = {
  all: []
}

// actions
const actions = {
  getAllPosts ({ commit }) {
    return  post.getAll().then( posts => {
      commit(types.RECEIVE_POSTS,  posts )
      return posts;
    })
  }
}

// getters
const getters = {
  allPosts: state => state.all
}

// mutations
const mutations = {
  [types.RECEIVE_POSTS] (state,  posts ) {
    state.all = posts
  },

  /*[types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }*/
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}