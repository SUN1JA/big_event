// vuex
import { getUserInfo } from '@/api/channel'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: ''
  },
  getters: {
    nickname: state => state.userInfo.nickname,
    username: state => state.userInfo.username,
    suer_pic: state => state.userInfo.suer_pic
  },
  mutations: {
    // 保存token
    updateToken (state, token) {
      state.token = token
    },
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async initUserInfo (context) {
      const { data: res } = await getUserInfo()
      if (res.code === 0) {
        context.commit('updateUserInfo', res.data)
      }
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
