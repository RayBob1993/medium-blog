<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link
            v-if="isWriterRole"
            to="/posts/add"
            class="button is-success"
          >
            Добавить пост
          </router-link>

          <b-button
            v-if="isAuth"
            type="is-danger"
            @click="onLogout"
          >
            Выход
          </b-button>

          <router-link
            v-else
            to="/auth/sign-in"
            class="button"
          >
            Войти
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Header',
    computed: {
      ...mapGetters('user', [
        'isWriterRole',
        'isAuth',
      ]),
    },
    methods: {
      ...mapActions('auth', [
        'logout',
      ]),

      onLogout () {
        this.logout()

        this.$router.push({
          path: '/'
        })
      }
    },
  }
</script>
