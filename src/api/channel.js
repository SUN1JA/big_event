// 接口
import request from '@/utils/request'

/**
 * register注册
 * @param {*} param0 { username:用户名, password:密码, repassword:再次输入密码 }
 * @returns
 */
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param {*} param0 {username:用户名，password：密码}
 * @returns promise对象
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户信息
 * @param {*} token
 * @returns {id,username:用户名,nickname:昵称,suer_pic:头像路径,email:邮箱}
 */
export const getUserInfo = (token) => {
  return request({
    url: '/my/userinfo',
    method: 'GET'
  })
}

/**
 * 侧边栏
 * @returns {}
 */
export const getMenusAPI = () => {
  return request({
    url: '/my/menus',
    method: 'GET'
  })
}
