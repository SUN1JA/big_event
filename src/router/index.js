// 路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // webpack提供的import函数来路由懒加载导入组件
    // 切换到了/reg才会加载代码
    // 让首页体积更小，加载速度更快
    redirect: '/login'
  },
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
  },
  {
    path: '/layout',
    component: () => import('@/views/layout')
  }
]

const router = new VueRouter({
  routes
})

export default router
