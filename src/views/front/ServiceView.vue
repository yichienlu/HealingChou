<template>
<div class="healing_Theta">
    <h1 class="text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image text-white" style="background-image: url(src/assets/images/meditation-banner.jpg); background-position: center 70%;">
      療癒服務 <br>
      <span class="fs-3 fw-normal">{{ service.title }}</span>
    </h1>

<section class="healing_content bg-beige">
  <div class="container pt-5 pb-5 position-relative">
    <h2>{{ service.title }}</h2>
    <div v-html="service.content"></div>
  </div>
</section>

<section class="healing_reserve bg-image" style="background-image: url(src/assets/images/tarot-stack.jpg);">
  <div class="container pt-5 pb-5">
    <h2 class="text-center text-white mb-4">
      <img src="@/assets/images/tarot-card-icon.png" alt="">
      預約療癒
    </h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form class="row p-4 needs-validation" novalidate>
          <div class="col-12 mb-3">
            <label for="inputTime" class="form-label text-white">選擇療癒時間<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="inputTime" name="datepicker" placeholder="請選擇日期" autocomplete="off"  required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="inputName" class="form-label text-white">姓名<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="inputName" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="inputLast5" class="form-label text-white">匯款後5碼<span class="text-danger">*</span></label>
            <input type="number" class="form-control" id="inputLast5" required>
            <div id="inputLast5Help" class="form-text text-light">
              匯款資訊：台新銀行 812   敦南分行 <br>
              帳號：28881004008118   <br>
              戶名：沈家舟</div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="inputTel" class="form-label text-white">手機號碼<span class="text-danger">*</span></label>
            <input type="tel" class="form-control" id="inputTel" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lineID" class="form-label text-white">Line ID<span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="lineID" required>
          </div>
          <div class="col-12 mb-3">
            <label for="formNote" class="form-label text-white">備註</label>
            <textarea class="form-control" id="formNote" rows="3"></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-beige text-primary w-100" data-bs-toggle="modal" data-bs-target="#heaingTheta_Modal" >送出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Modal -->
<div class="modal fade" id="heaingTheta_Modal" tabindex="-1" aria-labelledby="heaingTheta_ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm  modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body border-0 text-center">
        預約成功！
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">到時見！</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env


export default {
  data(){
    return {
      service: {}
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getService(){
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        console.log(res.data.product)
        this.service = res.data.product
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted(){
    this.getService()
  }
}
</script>

<style lang="scss">

</style>

