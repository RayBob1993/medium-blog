import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/auth/SignIn.vue'
import PostAdd from '../views/posts/Add.vue'
import PostEdit from '../views/posts/Edit.vue'
import PostId from '../views/posts/_id.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/auth/sign-in',
    component: SignIn,
  },
  {
    path: '/posts/add',
    component: PostAdd,
  },
  {
    path: '/posts/edit',
    component: PostEdit,
  },
  {
    path: '/posts/:id',
    component: PostId,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
