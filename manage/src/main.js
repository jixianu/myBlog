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

// 构建实例
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
