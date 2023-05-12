import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Index.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Careers from './components/Careers.vue';
import About from './components/About.vue';
import Pricing from './components/Pricing.vue';
import Features from './components/Features.vue';


const routes = [
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers,
  },

  {
    path: '/:token?/shop',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
