<template>
<LoaderComponent :class="{'d-none': !isLoading}" class="loader"></LoaderComponent>  
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

  <!-- <section class="healing_reserve bg-image d-none" style="background-image: url(src/assets/images/tarot-stack.jpg);">
    <div class="container pt-5 pb-5">
      <h2 class="text-center text-white mb-4">
        報名課程
      </h2>
    </div>
  </section> -->

</div>
</template>

<script>
// import { RouterLink } from 'vue-router'
import banner_bg from '@/assets/images/banner-tarot-05.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      banner_bg,
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
      this.isLoading = false
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted(){
    // loader
    this.isLoading = true
    // setTimeout(()=>{
    //   this.isLoading = false
    // },1000)

    this.getCourse()
  }
}
</script>

<style lang="scss">

</style>

