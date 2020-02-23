export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    isAuth: state => !!state.user,
    isWriterRole: state => state.user && state.user.role === 'writer',
    isReaderRole: state => state.user && state.user.role === 'reader',
  },
  actions: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user
    },
  },
}