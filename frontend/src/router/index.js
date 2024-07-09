import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Survey from '../components/Survey.vue'

const routes = [
  { path: '/', component: MainContent },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/survey', component: Survey }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
