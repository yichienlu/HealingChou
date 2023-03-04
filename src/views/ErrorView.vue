<template>
  <div>
    <h1>404</h1>
    <h2>哇~ 沒有這頁餒</h2>
    <router-link to="/">回首頁</router-link>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>