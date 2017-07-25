import Vue from 'vue'
import Vuex from 'vuex'
/*import * as actions from './actions'
import * as getters from './getters'*/
/*import cart from './modules/cart.js'
import products from './modules/product'*/
import post from './modules/post'
/*import tag from './modules/tag'
import category from './modules/category'
import token from './modules/token'*/

import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
/*  actions,
  getters,*/
  modules: {
    /*cart,
    products*/
    post,/*
    tag,
		category,
		token*/
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})