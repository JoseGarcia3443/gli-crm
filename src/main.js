import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import Vuesax from 'vuesax'

import './lang'
import 'vuesax/dist/vuesax.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'normalize.css/normalize.css'
import 'animate.css'

Vue.use(VueSweetalert2).use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
