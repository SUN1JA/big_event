import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reg',
    // webpack提供的import函数来路由懒加载导入组件
    // 切换到了/reg才会加载代码
    // 让首页体积更小，加载速度更快
    component: () => import('@/views/register')
  },
  {
    path: '/login',

    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
