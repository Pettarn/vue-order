import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false

window.onresize = () => {
  location.reload()
}

const blackList = ['/indexPage/order']

// router.beforeEach((to, from, next) => {
//   if(!store.state.isLogin) {
//     if(blackList.indexOf(to.path) !== -1) {
//       next('/entry')
//     } 
//     else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

// Vue.prototype.store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
