<template>
  <DefaultLayout>
    <div class="container">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :claps="post.claps"
      />

      <b-pagination
        :total="pagination.totalCount"
        :current="pagination.currentPage"
        :perPage="pagination.perPage"
        aria-next-label="Вперёд"
        aria-previous-label="Назад"
        aria-page-label="Страница"
        aria-current-label="Текущая страница"
        @change="onPageChange"
      />
    </div>
  </DefaultLayout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import PostCard from '../components/Posts/PostCard'

  export default {
    name: 'HomePage',
    components: {
      PostCard,
    },
    computed: {
      ...mapState('posts', [
        'posts',
        'pagination',
      ]),
    },
    async created () {
      await this.onGetPosts()
    },
    methods: {
      ...mapActions('posts', [
        'getPosts',
      ]),
      async onGetPosts () {
        try {
          await this.getPosts(this.$route.query.page)
        } catch (error) {
          console.log(error)
        }
      },
      async onPageChange (value) {
        try {
          await this.getPosts(value)

          this.$router.push({
            query: {
              page: value,
            },
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
  }
</script>
