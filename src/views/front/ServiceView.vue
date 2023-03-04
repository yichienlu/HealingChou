<template>
<div class="healing_Theta">
    <h1 class="text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image text-white" style="background-image: url(src/assets/images/meditation-banner.jpg); background-position: center 70%;">
      療癒服務 <br>
      <span class="fs-3 fw-normal">希塔療癒</span>
    </h1>

<section class="healing_content bg-beige">
  <div class="container pt-5 pb-5 position-relative">
    <h2>希塔療癒</h2>
    <h3 class="fs-5 fw-normal mb-5">連結自己的好工具，信念創造實相</h3>
    <p>透過療癒師的帶領，連結內在神性，將腦波帶領到希塔波</p>
    <ul>
      <li>釋放限制性信念</li>
      <li>療癒內在小孩、過去創傷</li>
      <li>清理祖先業力</li>
      <li>豐盛顯化</li>
      <li>未來解讀</li>
    </ul>
    <p>收費：1800元 / 1-1.5小時</p>

    <h3 class="fs-5 mt-5 mb-4">希塔療癒介紹：</h3>
    <p>ThetaHealingⓇ 希塔療癒是在冥想的過程中，透過對造物主專注地祈求，來啟發身、心、靈的療癒。</p>
    <p>當我們連結萬有的造物主，我們的腦波會自動轉換成希塔波的狀態，在這個狀態下，您可以立即創造和改變事實。</p>
    <p>您將會接受到造物主毫無保留傳遞下來令人大開眼界的訊息。</p>

    <!-- <img src="./assets/images/tarot-card-sketch.png" class="position-absolute"> -->

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
// import { RouterLink } from 'vue-router'

// export default {
//   components: {
//     RouterLink
//   }
// }
</script>

<style lang="scss">

</style>

