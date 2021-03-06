import Vue from 'vue'
import router from './router'
import store from './store'

import './plugins/buefy'
import './plugins/vuelidate'
import './plugins/components'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
