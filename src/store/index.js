// vuex
import { getUserInfo } from '@/api/channel'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: '',
    menus: []
  },
  getters: {
    // 用户信息
    nickname: state => state.userInfo.nickname, // 昵称
    username: state => state.userInfo.username, // 用户名
    suer_pic: state => state.userInfo.suer_pic // 头像
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
    // 获取用户信息
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
