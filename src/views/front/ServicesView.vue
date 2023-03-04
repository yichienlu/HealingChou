<template>
  <div>
    <h2 class="text-center fs-1 py-40 py-lg-80 bg-image text-white" style="background-image: url(https://images.pexels.com/photos/9918898/pexels-photo-9918898.jpeg);">療癒服務</h2>
    <section class="container py-40 py-lg-80">
      <div class="row">
        <div class="col-md-4 mb-4">
          <RouterLink to="" class="healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class="text-center mb-0">
              <!-- <span class="material-symbols-outlined fs-48">self_improvement</span>  -->
              <br>
              希塔療癒</h2>
            <p class="mb-0 p-4 pt-3 mt-auto healing-item-description">希塔療癒是在冥想的過程中，透過對造物主專注地祈求，來啟發身、心、靈的療癒。</p>            
          </RouterLink>
        </div>
        <div class="col-md-4 mb-4">
          <RouterLink to="" class="healing-item healing-item-tarot d-block h-100 position-relative rounded-12 d-flex flex-column shadow">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class=" top-0 bottom-0 start-0 end-0  text-center mb-0">
              <!-- <span class="material-symbols-outlined fs-48 tarot-icon">style</span>  -->
              <br>
              塔羅療癒</h2>
            <p class=" mb-0 p-4 pt-3 mt-auto healing-item-description">療癒師從各式牌面中，協助水手看見問題、找出盲點，並提供建議以及未來可能性。</p>
          </RouterLink>
        </div>
        <div class="col-md-4 mb-4">
          <RouterLink to="" class="healing-item healing-item-MoneyReiki d-block h-100 position-relative rounded-12 d-flex flex-column shadow" style="background-image: url();">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class=" top-0 bottom-0 start-0 end-0  text-center mb-0">
              <!-- <span class="material-symbols-outlined fs-48">paid</span>  -->
              <br>
              金錢靈氣</h2>
            <p class=" mb-0 p-4 pt-3 mt-auto healing-item-description">清理金錢上的負面阻礙、堵塞，疏通金錢能量管道，幫助提升財運能量，強化招財能量，讓身上金光閃閃。</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components: {
    RouterLink
  },
  mounted() {
    this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">

</style>

