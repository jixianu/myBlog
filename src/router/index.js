import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import Login from '@/pages/login'
import Article from '@/pages/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/detail',
      name: 'blog-detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/*',
      name: 'all',
      component: Home
    }
  ]
})
