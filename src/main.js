import Vue from 'vue'
import Buefy from 'buefy'
import router from './router'
import store from './store'

import 'buefy/dist/buefy.css'

import App from './App.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import Header from './components/Header.vue'

Vue.use(Buefy)

Vue.component(AuthLayout.name, AuthLayout)
Vue.component(DefaultLayout.name, DefaultLayout)
Vue.component(Header.name, Header)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
