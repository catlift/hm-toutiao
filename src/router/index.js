import Vue from 'vue'
import VueRouter from 'vue-router'

// view
import HomeView from '@/views/Home/HomeView.vue'
import UserView from '@/views/User/UserView.vue'
import LoginView from '@/views/Login/LoginView.vue'

// pathArr ，拦截规则
import pathArr from '@/router/pathArr.js'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/user', component: UserView },
  { path: '/login', component: LoginView }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (pathArr.includes(to.path)) {
    // 判断是否登录，已登录跳转到 /user，未登录跳转到 /login
    const token = localStorage.getItem('hm-tt-token')
    if (token) {
      next('/user')
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
