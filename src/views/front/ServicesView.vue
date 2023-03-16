<template>
  <div>
    <h2 class="text-center fs-1 py-40 py-lg-80 bg-image text-white"  :style="{ backgroundImage: `url(${banner_bg})` }">療癒服務</h2>
    <section class="container py-40 py-lg-80">
      <div class="row" v-if="services.length">
        <div class="col-md-6 col-lg-4 col-xxl-3 mb-4" v-for="service in services" :key="service.id">
          <RouterLink  :to="`/service/${service.id}`" class="healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow" :style="{backgroundImage: 'url('+ service.imageUrl+')'}" >
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class="text-center mb-0">
              <span class="material-symbols-outlined fs-48">{{ service.unit }}</span><br>
              {{ service.title }}</h2>  
            <div class=" mb-0 p-4 pt-3 mt-auto  healing-item-description">
              <div v-html="service.description"></div>
              <!-- {{ service.description }} -->
              </div>       
          </RouterLink>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import banner_bg from '@/assets/images/boat.jpg'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      banner_bg,
      services:[]
    }
  },
  components: {
    RouterLink
  },
  mounted() {
    this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products?category=service`)
    .then((res) => {
      console.log(res.data)
      this.services = res.data.products
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">

</style>

