import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../components/page/homePage.vue'
import order from '../components/page/order.vue'
import myHome from '../components/page/myHome.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage,
  },
  {
    path: '/order',
    name: 'order',
    component: order,
  },
  {
    path: '/myhome',
    name: 'myHome',
    component: myHome,
  },
]

let router = new Router({
  routes,
})

export default router