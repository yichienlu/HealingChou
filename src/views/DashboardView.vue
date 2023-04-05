<template>
  <div v-if="isLogin" class="position-relative">
    <div class="container">
      管理頁面 <br>
      <router-link to="/admin/orders">預約管理</router-link> |
      <!-- <router-link to="/admin/services">療癒服務管理</router-link> | -->
      <router-link to="/admin/courses">服務/課程管理</router-link> |
      <router-link to="/admin/blog">部落格管理</router-link> |
      <router-link to="/admin/coupons">優惠券管理</router-link> |
      <router-link to="/">回前台</router-link> |
      <a href="#" @click.prevent="logout()">登出</a>
    </div>    
    <RouterView />

  </div>

</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = 'hexToken=""'
      this.isLogin = false
      alert('已登出')
      this.$router.push('/')
    },
    checkAdmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_URL}/api/user/check`)
        .then(() => {
          this.isLogin = true
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>

<style lang="scss">

</style>

