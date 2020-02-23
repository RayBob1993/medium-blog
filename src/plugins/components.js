import Vue from 'vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Header from '../components/Header.vue'
import PostCard from '../components/Posts/PostCard.vue'
import PostLikeButton from '../components/Posts/PostLikeButton.vue'
import PostDeleteButton from '../components/Posts/PostDeleteButton.vue'
import PostEditButton from '../components/Posts/PostEditButton.vue'

Vue.component(AuthLayout.name, AuthLayout)
Vue.component(DefaultLayout.name, DefaultLayout)
Vue.component(Header.name, Header)
Vue.component(PostCard.name, PostCard)
Vue.component(PostLikeButton.name, PostLikeButton)
Vue.component(PostDeleteButton.name, PostDeleteButton)
Vue.component(PostEditButton.name, PostEditButton)