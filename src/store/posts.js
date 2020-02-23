import API from '../services/api'

const POSTS_PER_PAGE = 10

export default {
  namespaced: true,
  state: {
    posts: [],
    post: null,
    pagination: {
      currentPage: 0,
      pageCount: 0,
      perPage: 0,
      totalCount: 0,
    },
  },
  getters: {},
  actions: {
    async getPosts ({ commit }, page = 1) {
      const { data, headers } = await API.get('/posts', {
        params: {
          _page: page,
          _limit: POSTS_PER_PAGE,
        }
      })

      commit('setPosts', data)
      commit('setPagination', {
        currentPage: parseInt(page),
        headers,
      })
    },

    async getPost ({ commit }, id) {
      const { data } = await API.get('/posts', {
        params: {
          id,
        },
      })

      commit('setPost', data)
    },

    async deletePost ({ commit, dispatch }, id) {
      await API.delete(`/posts/${id}`)
      await dispatch('getPosts')
    },

    async likePost ({ commit }, { id, claps }) {
      const { data } = await API.patch(`/posts/${id}`, {
        claps,
      })
    },

    async addPost ({ commit }, { title, description, claps, createdAt, updateAt, userId }) {
      const { data } = await API.post('/posts', {
        title,
        description,
        claps,
        createdAt,
        updateAt,
        userId
      })

      commit('setPosts', data)
    },

    async editPost ({ commit, dispatch }, { id, title, description }) {
      await API.patch(`/posts/${id}`, {
        title,
        description,
      })
      await dispatch('getPosts')
    },
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts
    },
    setPagination: (state, { currentPage, headers }) => {
      const perPage = POSTS_PER_PAGE
      const totalCount = parseInt(headers['x-total-count'])

      state.pagination = {
        currentPage,
        perPage,
        totalCount,
      }
    },
    setPost: (state, post) => {
      state.post = post[0]
    },
  },
}