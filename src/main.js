import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import vueLazyload from 'vue-lazyload'
import store from './store'

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
  store,
  render: h => h(App)
})
