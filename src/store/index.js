import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageIndex: 'home'
  },
  mutations: {
    SETPAGEINDEX (state, index) {
      state.pageIndex = index
    }
  },
  actions: {
  },
  modules: {
  }
})
