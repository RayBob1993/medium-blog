<template>
  <div class="layout layout-default">
    <Header />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'DefaultLayout'
  }
</script>

<style lang="scss">
  .layout {
    &-default {
      .main {
        margin-top: 20px;
      }
    }
  }
</style>