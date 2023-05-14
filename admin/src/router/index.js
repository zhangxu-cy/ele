import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import index from '../views/login/index'
import indexs from '../views/dashboard/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login/index')
  },
  {
    path:'/dashboard',
    component:() => import('../views/dashboard/index')
  },
  {
    path:'/document',
    component:() => import('../views/document/document')
  }
]

const router = new VueRouter({
  routes
})

export default router
