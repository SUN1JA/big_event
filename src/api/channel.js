import request from '@/utils/request'

// 接口
export const registerAPI = () => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'sunyijia',
      password: '111111',
      rePassword: '111111'
    }
  })
}
