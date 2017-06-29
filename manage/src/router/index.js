import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/home',
    component: resolve => require(['@/pages/home'], resolve)
  },{
    path: '/',
    component: resolve => require(['@/pages/home'], resolve)
  },{
    path: '/post/:id',
    component: resolve => require(['@/pages/post-editor'], resolve)
  },{
    path: '/add',
    component: resolve => require(['@/pages/post-add'], resolve)
  },{
    path: '/tags',
    component: resolve => require(['@/pages/tags-categories'], resolve)
  },{
    path: '/data',
    component: resolve => require(['@/pages/data'], resolve)
  },{
    path: '/log',
    component: resolve => require(['@/pages/log'], resolve)
  },{
    path: 'login',
    component: resolve => require(['@/pages/login'], resolve)
  }]
})
