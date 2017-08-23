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
        component: resolve => require(['@/pages/post-manage'], resolve),
        meta: {
          requireAuth: true
        }
      },{
        path: '/post/:id',
        component: resolve => require(['@/pages/post-editor'], resolve),
        meta: {
          requireAuth: true
        }
      },{
        path: '/add',
        component: resolve => require(['@/pages/post-add'], resolve),
        meta: {
          requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
        }
      },{
        path: '/tags',
        component: resolve => require(['@/pages/tags'], resolve),
        meta: {
          requireAuth: true
        }
      },{
        path: '/categories',
        component: resolve => require(['@/pages/categories'], resolve),
        meta: {
          requireAuth: true
        }
      },{
        path: '/data',
        component: resolve => require(['@/pages/data'], resolve)
      },{
        path: '/log',
        component: resolve => require(['@/pages/log'], resolve),
        meta: {
          requireAuth: true
        }
      }]
    },{
    path: '/login',
    component: resolve => require(['@/pages/login'], resolve)
  },{
    path: '*',
    component: resolve => require(['@/pages/home'], resolve)
  }]
})
