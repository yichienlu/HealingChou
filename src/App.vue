<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env


export default {
  components: {
    RouterLink, RouterView
  },
  mounted() {

  }
}
</script>

<style lang="scss">

</style>
