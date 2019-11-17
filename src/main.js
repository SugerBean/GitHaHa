// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from 'mint-ui'
import animate from 'animate.css'
import bus from './components/Bus'

Vue.prototype.bus = bus;

Vue.use(animate)

import 'mint-ui/lib/style.css'
Vue.use(mintui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
