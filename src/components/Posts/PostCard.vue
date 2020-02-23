<template>
  <article class="card post-card">
    <div class="card-content">
      <h4 class="title is-4">
        <router-link :to="`/posts/${id}`">
          {{ title }}
        </router-link>
      </h4>

      <div class="content">
        {{ description }}
      </div>
    </div>

    <footer class="card-footer">
      <div class="buttons">
        <PostLikeButton
          :postId="id"
          :claps="claps"
        />

        <PostEditButton :postId="id" />

        <PostDeleteButton :postId="id" />
      </div>
    </footer>
  </article>
</template>

<script>
  export default {
    name: 'PostCard',
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      claps: {
        type: Number,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
  .post-card {
    margin-bottom: 20px;

    .card-footer {
      padding: 10px;
      justify-content: flex-end;
    }
  }
</style>