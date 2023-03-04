<template>
  <div>
    <h2 class="text-center fs-1 py-40 py-lg-80 text-white bg-image" style="background-image: url(src/assets/images/banner-tarot-01.jpg);">療癒課程</h2>
    <section class="container py-40 py-lg-80">
      <ul class="row list-unstyled">
        <li class="col-md-6 col-xxl-3 mb-4">
          <RouterLink to="" class="healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class="text-center mb-0">
              <span class="material-symbols-outlined fs-48">self_improvement</span> <br>
              希塔療癒師培訓班</h2>
            <ul class="mb-0 pb-4 pt-3 mt-auto mx-auto healing-item-description">
              <li>希塔療癒基礎DNA</li>
              <li>希塔療癒進階DNA</li>
              <li>希塔療癒深度挖掘</li>
            </ul>
          </RouterLink>
        </li>
        <li class="col-md-6 col-xxl-3 mb-4">
          <RouterLink to=""  class="healing-item bg-image healing-item-tarot d-block h-100 position-relative rounded-12 d-flex flex-column shadow">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class=" top-0 bottom-0 start-0 end-0  text-center mb-0">
              <span class="material-symbols-outlined fs-48 tarot-icon">style</span> <br>
              大天使神諭占卜解牌班</h2>
            <p class=" mb-0 p-4 pt-3 mt-auto healing-item-description">
              認識15位大天使，與45張牌卡深度連結，從牌面了解脈輪， 透過與天使對話自我療癒。
            </p>
          </RouterLink>
        </li>
        <li class="col-md-6 col-xxl-3 mb-4">
          <RouterLink to="" class="healing-item bg-image healing-item-tarot d-block h-100 position-relative rounded-12 d-flex flex-column shadow" style="background-image: url(src/assets/images/tart-card-on-ground.jpg);">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class=" top-0 bottom-0 start-0 end-0  text-center mb-0">
              <span class="material-symbols-outlined fs-48">volunteer_activism</span><br>
              天使陪伴班</h2>
            <p class=" mb-0 p-4 pt-3 mt-auto healing-item-description">
              靜心連結大天使，透過大天使神諭占卜卡得知大天使訊息，開啟自我對話。
            </p>
          </RouterLink>
        </li>
        <li class="col-md-6 col-xxl-3 mb-4">
          <RouterLink to="" class="healing-item bg-image healing-item-MoneyReiki d-block h-100 position-relative rounded-12 d-flex flex-column shadow">
            <div class="position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"></div>
            <h2 class=" top-0 bottom-0 start-0 end-0  text-center mb-0">
              <span class="material-symbols-outlined fs-48">paid</span> <br>
              金錢靈氣班</h2>
              <ul class=" mb-0 pt-3 pb-4 mt-auto mx-auto healing-item-description">
                <li>一階 - 金錢靈氣治療師</li>
                <li>二階 - 金錢靈氣大師階</li>
                <li>三階 - 金錢靈氣宗師階</li>
              </ul>
          </RouterLink>
        </li>
      </ul>
    </section>
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

<style lang="scss">

</style>

