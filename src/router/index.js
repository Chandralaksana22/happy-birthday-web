import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import FormPage from '../components/FormPage.vue'
import GreetingPage from '../components/GreetingPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/form', component: FormPage },
  { path: '/greeting', component: GreetingPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
