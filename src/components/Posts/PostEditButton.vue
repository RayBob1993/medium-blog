<template>
  <router-link
    v-if="isWriterRole"
    :to="`/posts/edit?id=${postId}`"
    class="button"
  >
    Редактировать
  </router-link>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'PostEditButton',
    props: {
      postId: {
        type: Number,
        required: true,
      },
    },
    computed: {
      ...mapGetters('user', [
        'isWriterRole',
      ]),
    },
  }
</script>

<style lang="scss">

</style>