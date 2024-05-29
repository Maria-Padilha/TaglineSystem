import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import BusinessView from '../views/BusinessView.vue';
import SignView from '../views/SignView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessView
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
