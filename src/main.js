// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Tag from './components/tag.vue'
import '../static/style/reset.css'
import './assets/style/index.css'
import './assets/font/iconfont.css'
import './assets/js/iconfont.js'
// import './assets/js/rem.js'

Vue.config.productionTip = false
Vue.component('tag', Tag)
/* eslint-disable no-new */
let VueCase = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
