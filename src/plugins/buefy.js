import Vue from 'vue'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faAngleLeft,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleRight,
  faAngleLeft,
  faHeart,
)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

Vue.component('vue-fontawesome', FontAwesomeIcon)

import 'buefy/dist/buefy.css'