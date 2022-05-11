import { createRouter, createWebHistory } from 'vue-router'
import TheCart from '../views/TheCart'
import TheHistory from '../views/TheHistory'
import HomePage from '../views/HomePage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cart',
    name: 'cart',
    component: TheCart
  },
  {
    path: '/history',
    name: 'history',
    component: TheHistory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
