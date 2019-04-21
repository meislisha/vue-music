import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import vueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
FastClick.attach(document.body);
Vue.use(vueLazyload, {
  loading:require('common/image/default.png')
})
import router from './router'
import './common/stylus/index.styl'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
