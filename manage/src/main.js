import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import ElementUI from 'element-ui'
import VueHighcharts from 'vue-highcharts';

import '../../static/style/reset.css'
import './assets/style/index.css'
import '../../static/style/element-vue/index.css'

import { currency } from './filters/currency.js'

Vue.config.productionTip = false
// 全局组件

// 全局过滤器
Vue.filter('currency', currency)

// 使用插件
Vue.use(ElementUI)
Vue.use(VueHighcharts);

// 对路由进行判断
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.user.token) {  // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
})
// 构建实例
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
