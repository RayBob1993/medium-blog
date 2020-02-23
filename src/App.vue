<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    created () {
      this.init()
    },
    methods: {
      ...mapActions([
        'init',
      ]),
    },
  }
</script>
