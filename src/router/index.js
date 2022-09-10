import Vue from 'vue'
import VueRouter from 'vue-router'

// view
import HomeView from '@/views/Home/HomeView.vue'
import UserView from '@/views/User/UserView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/user', component: UserView }
]

const router = new VueRouter({
  routes
})

export default router
