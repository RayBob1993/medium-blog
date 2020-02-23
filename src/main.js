import Vue from 'vue'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faAngleLeft,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'
import store from './store'

import 'buefy/dist/buefy.css'

import App           from './App.vue'
import AuthLayout    from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import Header        from './components/Header.vue'
import PostCard      from './components/Posts/PostCard.vue'
import PostLikeButton       from './components/Posts/PostLikeButton.vue'
import PostDeleteButton       from './components/Posts/PostDeleteButton.vue'
import PostEditButton       from './components/Posts/PostEditButton.vue'

library.add(
  faAngleRight,
  faAngleLeft,
  faHeart,
)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.component(AuthLayout.name, AuthLayout)
Vue.component(DefaultLayout.name, DefaultLayout)
Vue.component(Header.name, Header)
Vue.component(PostCard.name, PostCard)
Vue.component(PostLikeButton.name, PostLikeButton)
Vue.component(PostDeleteButton.name, PostDeleteButton)
Vue.component(PostEditButton.name, PostEditButton)
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
