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
            <li class="nav-item">
              <RouterLink to="/news" class="nav-link py-1 px-2 rounded-4">最新消息</RouterLink>
            </li>
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
          <div class="col-md-4 text-center align-self-center">
              <img src="../assets/images/logo-primary.svg" alt="Chou" class="d-inline-block mx-auto" width="120" 
              >
              <h1 class="fs-5 lh-base fw-500" 
              >舟舟療心室</h1>
            <div class="d-flex justify-content-center">
              <a href="https://www.facebook.com/healingchou" target="_blank" 
              >
              facebook
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/chouhealer/" target="_blank" class="mx-4"  
              >
              instagram
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://line.me/R/ti/p/%40655bistu" target="_blank"  
              >
              line
                <i class="bi bi-line"></i>
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <h2 class="fw-bold" 
            >來聊療吧！</h2>
            <!-- <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3" 
                >
                  <div class="form-floating">
                    <input type="text" class="form-control" id="nameInput" placeholder="name" required>
                    <label for="nameInput">請輸入名字*</label>
                  </div>
                </div>
                <div class="col-md-6 mb-3" 
                >
                  <div class="form-floating" 
                  >
                    <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" required>
                    <label for="emailInput">請輸入Email*</label>
                  </div>
                </div>
                <div class="form-floating mb-3" 
                >
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px" required></textarea>
                  <label for="floatingTextarea" class="ps-4">我想跟舟舟說*</label>
                </div>
              </div>
              <button class="btn btn-secondary w-100" type="submit" 
              >送出留言</button>
            </form> -->
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
      </div>
    </footer>
  </div>

  <!-- <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

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
</style>
