import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getter'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})