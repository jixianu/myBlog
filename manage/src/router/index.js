import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Post from '@/pages/post'
import Data from '@/pages/data'
import Log from '@/pages/log'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/log',
      name: 'log',
      component: Log
    },
    {
      path: '/*',
      name: 'other',
      component: Home
    }
  ]
})
