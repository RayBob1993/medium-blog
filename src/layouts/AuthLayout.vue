<template>
  <div class="layout layout-auth">
    <Header />
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>
