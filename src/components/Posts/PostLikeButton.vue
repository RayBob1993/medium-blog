<template>
  <b-button
    icon-left="heart"
    :loading="isLoading"
    @click="onLikePost"
  >
    {{ claps }}
  </b-button>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { Loading } from '../../mixins/utils'

  export default {
    name: 'PostLikeButton',
    mixins: [
      Loading,
    ],
    props: {
      claps: {
        type: Number,
        required: true,
      },
      postId: {
        type: Number,
        required: true,
      },
    },
    computed: {
      ...mapGetters('user', [
        'isWriterRole',
        'isAuth',
      ]),
    },
    methods: {
      ...mapActions('posts', [
        'likePost',
      ]),

      async onLikePost () {
        if (this.isLoading) {
          return
        }

        if (this.isWriterRole) {
          this.$buefy.notification.open({
            message: 'Вы не можете хлопать за этот пост',
            position: 'is-bottom-left',
            type: 'is-danger'
          })

          return
        }

        if (!this.isAuth) {
          this.$buefy.notification.open({
            message: 'Вы не можете хлопать за этот пост пока вы не авторизованы',
            position: 'is-bottom-left',
            type: 'is-danger'
          })

          return
        }

        try {
          this.setLoading(true)

          await this.likePost({
            id: this.postId,
            claps: ++this.claps
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