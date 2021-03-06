import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Entries from '../views/Entries'
import newEntry from '../views/newEntry'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Entries',
    name: 'Entries',
    component: Entries
  },
  {
    path: '/newEntry',
    name: 'NewEntry',
    component: newEntry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
