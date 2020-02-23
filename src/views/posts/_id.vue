<template>
  <DefaultLayout>
    <div
      v-if="post"
      class="container"
    >
      <router-link
        to="/"
        class="button is-small"
      >
        К постам
      </router-link>

      <h1 class="title">{{ post.title }}</h1>

      <div class="content">
        {{ post.description }}
      </div>

      <div class="buttons">
        <PostLikeButton
          :postId="post.id"
          :claps="post.claps"
        />

        <PostEditButton :postId="post.id" />

        <PostDeleteButton :postId="post.id" />
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PostIdPage',
    computed: {
      ...mapState('posts', [
        'post',
      ]),
      ...mapGetters('user', [
        'isAuth',
      ]),
    },
    async created () {
      await this.onGetPost(this.$route.params.id)
    },
    methods: {
      ...mapActions('posts', [
        'getPost',
      ]),
      async onGetPost (id) {
        try {
          await this.getPost(id)
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
</script>