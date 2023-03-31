<template>
<LoaderComponent :class="{'d-none': !isLoading}" class="loader" />  
<div class="course_Theta position-relative">
    <h1 class="text-white text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image" :style="{ backgroundImage: `url(${banner_bg})` }" >
      療癒課程 <br>
    </h1>
  <section class="healing_content bg-beige">
    <div class="container py-40 py-lg-80 position-relative">
      <h2>{{ course.title }}</h2>
      <div v-html="course.content"></div>
    </div>
  </section>
  <section class="healing_reserve bg-image" :style="{ backgroundImage: `url(${order_bg})` }">
    <div class="container pt-5 pb-5">
      <h2 class="text-center text-white mb-4">
        <img src="@/assets/images/tarot-card-icon.png" alt="報名課程">
        報名課程
      </h2>
      <div class="d-flex justify-content-center">
        <div class="d-inline-block p-3" style="background-color: #fffA;">
          <p>請聯繫舟舟報名</p>
          <ul class="list-unstyled">
            <li class="mb-2 d-flex justify-content-between">
              <span class="me-4">Facebook: </span>
              <a href="https://www.facebook.com/healingchou" target="_blank" class="text-decoration-underline">healingchou</a>
            </li>
            <li class="mb-2 d-flex justify-content-between">
              <span>Instagram:</span>
              <a href="https://www.instagram.com/chouhealer/" target="_blank" class="text-decoration-underline">chouhealer</a>
            </li>
            <li class="mb-2 d-flex justify-content-between">
              <span>Line: </span>
              <a href="https://line.me/R/ti/p/%40655bistu" target="_blank" class="text-decoration-underline">@655bistu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
// import { RouterLink } from 'vue-router'
import order_bg from '@/assets/images/tarot-stack.jpg'
import banner_bg from '@/assets/images/banner-tarot-05.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      banner_bg,
      order_bg,
      isLoading: false,
      course: {}
    }
  },
  components: {
    LoaderComponent
  },
  methods: {
    getCourse(){
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        // console.log(res.data.product)
        this.course = res.data.product
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(()=>{
        setTimeout(()=>{
          this.isLoading = false
        },1000)
      })
    }
  },
  mounted(){
    this.isLoading = true
    this.getCourse()
  }
}
</script>
