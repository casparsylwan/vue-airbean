import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About';
import Landing from '../views/Landing';
import Menu from '../views/Menu';
import Cart from '../views/Cart';
import Status from '../views/Status';
import Profile from '../views/Profile';
import Login from '../views/Login';

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name: 'Landing',
      component:Landing
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/menu',
    name:'Menu',
    component: Menu
  },
  {
    path:'/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/status',
    name: 'Status',
    component: Status

  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
