import Vue from 'vue'
import Router from 'vue-router'

import indexPage from '../components/page/indexPage.vue'
import homePage from '../components/page/homePage.vue'
import order from '../components/page/order.vue'
import myHome from '../components/page/myHome.vue'
import businessPage from '../components/page/businessPage.vue'

import businessIndex from '../components/page/businessIndex.vue'
import businessSecond from '../components/page/businessSecond.vue'
import businessThird from '../components/page/businessThird.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/indexPage/',
  },
  {
    path: '/indexPage/',
    component: indexPage,
    children: [
      {
        path: '',
        redirect: 'homePage',
      },
      {
        path: 'homePage',
        component: homePage,
      },
      {
        path: 'order',
        component: order,
      },
      {
        path: 'myHome',
        component: myHome,
      },
    ]
  },
  {
    path: '/business/',
    component: businessPage,
    children: [
      {
        path: '',
        redirect: 'businessIndex',
      },
      {
        path: 'businessIndex',
        component: businessIndex,
      },
      {
        path: 'businessSecond',
        component: businessSecond,
      },
      {
        path: 'businessThird',
        component: businessThird,
      }
    ]
  }
]

let router = new Router({
  routes,
})

export default router