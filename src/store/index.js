import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// const updateToken = {
//   namespaced: true

// }

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    // 保存token
    updateToken (state, token) {
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
