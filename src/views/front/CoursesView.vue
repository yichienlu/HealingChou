<template>
  <LoaderComponent :class="{'d-none': !isLoading}" class="loader" />
  <div>
    <h2 class="text-center fs-1 py-40 py-lg-80 text-white bg-image" 
    :style="{ backgroundImage: 'url('+ banner_image +')' }">療癒課程</h2>
    <section class="container py-40 px-3">
      <div class="row" v-if="courses.length">
        <div class="col-md-6 col-lg-4 col-xxl-3 mb-4" v-for="course in courses" :key="course.id">
          <RouterLink :to="`/course/${course.id}`" 
          class="healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow" 
          :style="{backgroundImage: 'url('+ course.imageUrl+')'}" 
          >
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class="text-center mb-0 pt-120">
              <span class="material-symbols-outlined fs-48">
                {{ course.icon }}</span> <br>
              {{ course.title }}
            </h2>
            <div class=" mb-0 p-4 pt-3 mt-auto flex healing-item-description">
            <div v-html="course.description"></div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="bg-beige py-40">
      <div class="container px-3">
        <h3 class="py-4">預約流程</h3>
        <div class="row justify-content-center justify-content-lg-between px-3">
          <div class="col-md-3 mb-3 mb-md-0 p-3 border border-4 border-primary rounded-12 shadow bg-white d-flex flex-column justify-content-center align-items-center">
            <div class="text-center">選擇想要的課程</div>
          </div>
          <div class="col-1 mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center">
            <span class="d-none d-md-block  material-symbols-outlined fs-48">arrow_forward</span>
            <span class="d-md-none  material-symbols-outlined fs-48">arrow_downward</span>
          </div>
          <div class="col-md-3 mb-3 mb-md-0 p-3 border border-4 border-primary rounded-12 shadow bg-white d-flex flex-column justify-content-center align-items-center">
            <div class="text-center">
              與舟舟聯繫<br>
              <span class=" text-nowrap">預約時段及確認價格</span>
            </div>
          </div>
          <div class="col-1 mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center">
            <span class="d-none d-md-block  material-symbols-outlined fs-48">arrow_forward</span>
            <span class="d-md-none  material-symbols-outlined fs-48">arrow_downward</span>
          </div>
          <div class="col-md-4 p-3 border border-4 border-primary rounded-12 shadow bg-white d-flex flex-column justify-content-center align-items-center">
            <p>匯款至</p>
            <small class="d-block mx-auto">
                銀行：台新銀行 812 敦南分行 <br>
                帳號：28881004008118<br>
                戶名：沈家舟 
            </small>
          </div>
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
        // console.log(res.data.products)
        this.courses = res.data.products
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
    this.getCourses()
  }
}
</script>
