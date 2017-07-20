import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: resolve => require(['@/pages/common'], resolve),
    children: [{
        path: '/home',
        component: resolve => require(['@/pages/home'], resolve)
      },{
        path: '/post',
        component: resolve => require(['@/pages/post-manage'], resolve)
      },{
        path: '/post/:id',
        component: resolve => require(['@/pages/post-editor'], resolve)
      },{
        path: '/add',
        component: resolve => require(['@/pages/post-add'], resolve)
      },{
        path: '/tags',
        component: resolve => require(['@/pages/tags'], resolve)
      },{
        path: '/categories',
        component: resolve => require(['@/pages/categories'], resolve)
      },{
        path: '/data',
        component: resolve => require(['@/pages/data'], resolve)
      },{
        path: '/log',
        component: resolve => require(['@/pages/log'], resolve)
      },{
        path: '*',
        component: resolve => require(['@/pages/home'], resolve)
      }]
    },{
    path: '/login',
    component: resolve => require(['@/pages/login'], resolve)
  }]
})
