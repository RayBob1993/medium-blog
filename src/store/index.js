import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import posts from './posts'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    init ({ commit }) {
      const sessionUser = sessionStorage.getItem('user')

      if (sessionUser) {
        commit('user/setUser', JSON.parse(sessionUser))
      }
    },
  },
  modules: {
    auth,
    user,
    posts,
  }
})
