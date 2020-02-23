<template>
  <b-button
    v-if="isWriterRole"
    type="is-danger"
    :loading="isLoading"
    @click="onDeletePost"
  >
    Удалить
  </b-button>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { Loading } from '../../mixins/utils'

  export default {
    name: 'PostDeleteButton',
    mixins: [
      Loading,
    ],
    props: {
      postId: {
        type: Number,
        required: true,
      },
      redirect: {
        type: String,
        default: '/'
      }
    },
    computed: {
      ...mapGetters('user', [
        'isWriterRole',
      ]),
    },
    methods: {
      ...mapActions('posts', [
        'deletePost',
      ]),

      async onDeletePost () {
        try {
          this.setLoading(true)
          await this.deletePost(this.postId)

          this.$router.push({
            path: this.redirect,
          })
        } catch (error) {
          console.error(error)
        } finally {
          this.setLoading(false)
        }
      },
    },
  }
</script>