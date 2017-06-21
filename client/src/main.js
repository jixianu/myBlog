import Vue from 'vue'
import App from './App'
import router from './router'
import Tag from './components/tag.vue'
import '../../static/style/reset.css'
import './assets/style/index.css'
import '../../static/style/markdown.css'
import './assets/font/iconfont.css'
import './assets/js/iconfont.js'
// vue2.0 过滤器能不能使用 怎么使用
// import {markdown} from './filter/marked.js'
// import './assets/js/rem.js'

Vue.config.productionTip = false
// 全局组件
Vue.component('tag', Tag)

// 全局过滤器
// Vue.filter('markdown', markdown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
