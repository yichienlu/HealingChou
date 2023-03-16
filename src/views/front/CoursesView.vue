<template>
  <LoaderComponent :class="{'d-none': !isLoading}" class="loader"></LoaderComponent>
  <div>
    <h2 class="text-center fs-1 py-40 py-lg-80 text-white bg-image" 
    :style="{ backgroundImage: 'url('+ banner_image +')' }">療癒課程</h2>
    <section class="container py-40 py-lg-80">
      <div class="row" v-if="courses.length">
        <div class="col-md-6 col-lg-4 col-xxl-3 mb-4" v-for="course in courses" :key="course.id">
          <RouterLink :to="`/course/${course.id}`" 
          class="healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow" 
          :style="{backgroundImage: 'url('+ course.imageUrl+')'}" 
          >
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class="text-center mb-0">
              <span class="material-symbols-outlined fs-48">
                {{ course.unit }}</span> <br>
                {{ course.title }}</h2>
              <div class=" mb-0 p-4 pt-3 mt-auto flex healing-item-description">
              <div v-html="course.description"></div>
              <!-- {{ course.description }} -->
              </div>
          </RouterLink>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import banner_image from '@/assets/images/banner-tarot-01.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      isLoading: false,
      banner_image,
      courses:[]
    }
  },
  components: {
    RouterLink,
    LoaderComponent
  },
  methods: {
    getCourses(){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products?category=course`)
      .then((res) => {
        console.log(res.data.products)
        this.courses = res.data.products
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted(){
    // loader
    this.isLoading = true
    setTimeout(()=>{
      this.isLoading = false
    },1000)
    
    this.getCourses()
  }
}
</script>

<style lang="scss">

</style>

