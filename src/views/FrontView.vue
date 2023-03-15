<template>
  <div class="position-relative">
    <!-- //讀取畫面 -->
    <div class="loader d-none">
        <div class="loader-tarot card-5"></div>
        <div class="loader-tarot card-4"></div>
        <div class="loader-tarot card-3"></div>
        <div class="loader-tarot card-2"></div>
        <div class="loader-tarot card-1">
          <img src="../assets/images/logo-light.svg" class="top-50 start-50 translate-middle">
        </div>
    </div>
    <!-- back to top -->
    <a href="#" onclick="topFunction()" id="backToTop" class="back-to-top">
      <span class="material-symbols-outlined">
        arrow_upward
        </span>
    </a>   

    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-primary sticky-top">
      <div class="container">
        <RouterLink to="/" class="navbar-brand text-primary d-flex align-items-center">
          <img src="../assets/images/logo-primary.svg" alt="Logo" height="20" class="d-inline-block me-2">
          <span>舟舟療心室</span>
        </RouterLink>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <!-- <li class="nav-item">
              <RouterLink to="/news" class="nav-link py-1 px-2 rounded-4">最新消息</RouterLink>
            </li> -->
            <li class="nav-item ms-lg-4">
              <RouterLink to="/about" class="nav-link py-1 px-2 rounded-4">關於舟舟</RouterLink>
            </li>
            <li class="nav-item ms-lg-4">
              <RouterLink to="/services" class="nav-link py-1 px-2 rounded-4">療癒服務</RouterLink>
            </li>
            <li class="nav-item ms-lg-4">
              <RouterLink to="/courses" class="nav-link py-1 px-2 rounded-4">療癒課程</RouterLink>
            </li>
            <li class="nav-item ms-lg-4">
              <RouterLink to="/blog" class="nav-link py-1 px-2 rounded-4">舟舟小療</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <RouterView />

    <section class="layout-banner">
      <p class="container text-center text-md-end text-primary" >
        當你在生活、感情、工作路上迷惘， <br><br>
        舟舟願意陪你這一小段路， <br><br>
        學會認識自己、更愛自己以及療癒自己。
      </p>
    </section>
    <section class="section-contact py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center align-self-center">
              <img src="../assets/images/logo-primary.svg" alt="Chou" class="d-inline-block mx-auto" width="120" 
              >
              <h1 class="fs-5 lh-base fw-500" 
              >舟舟療心室</h1>
            <div class="d-flex justify-content-center">
              <a href="https://www.facebook.com/healingchou" target="_blank" 
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.instagram.com/chouhealer/" target="_blank" class="mx-4"  
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://line.me/R/ti/p/%40655bistu" target="_blank"  
              >
                <i class="fa-brands fa-line"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="py-80"></div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer text-center bg-primary text-white">
      <div class="container py-4">
        <p class="fw-bold"><small>免責聲明</small></p>
        <p class="fw-thin"><small>
          本網站所提及「療癒」一詞，不等同「治癒」、「治療」，課程所教授的療癒方式、探討方式和技巧無意用來做為診斷、處方或取代醫生或治療。
        </small></p>
        <p>Copyright © 2022 舟舟療心室. All rights reserved.</p>       
        <RouterLink to="/admin" class="">admin</RouterLink>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
// const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components: {
    RouterLink, RouterView
  },
  mounted() {
    // this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products`)
    // .then((res) => {
    //   console.log(res.data)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }
}
</script>

<style lang="scss">
*{
  outline: 1px solid #AAA
}
</style>
