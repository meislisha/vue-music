import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./action"
import * as getters from "./getter"
import state from './state'
import mutations from './mutation'
import createLogger from 'vuex/dist/logger'//每次mutation修改state，控制台会打印

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "PRODUTION"
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()]:[]
})
