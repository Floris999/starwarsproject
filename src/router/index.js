import Vue from 'vue'
import VueRouter from 'vue-router'
import MainArea from '../components/MainArea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainArea
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
