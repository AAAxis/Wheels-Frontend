import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Index.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Careers from './components/Careers.vue';
import About from './components/About.vue';
import News from './components/News.vue';
import Apply from './components/Apply.vue';
import Payment from './components/Payment.vue';
import WellKnown from './components/WellKnown.vue';
import Features from './components/Features.vue';


const routes = [
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
  {
    path: '/.well-known',
    name: 'WellKnown',
    component: WellKnown, 
  },
  {
    path: '/apply/:id',
    name: 'Apply',
    component: Apply, 
  },
  {
    path: '/payment/:orderID',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
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
