import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'


Vue.config.productionTip = false

window.onresize = () => {
  location.reload()
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
