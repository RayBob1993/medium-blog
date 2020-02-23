import API from '../services/api'

export default {
  namespaced: true,
  actions: {
    async signIn ({ commit }, { login, password }) {
      const { data } = await API.get('/users', {
        params: {
          login,
          password,
        }
      })

      if (!data.length) {
        throw new Error('Пользователь не найден')
      }

      sessionStorage.setItem('user', JSON.stringify(data[0]))

      commit('user/setUser', data[0], {
        root: true
      })
    },

    logout ({ commit }) {
      commit('user/setUser', null, {
        root: true
      })

      sessionStorage.removeItem('user')
    },
  },
}