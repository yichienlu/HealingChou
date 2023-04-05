<template>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="coupon.id">編輯優惠券</span>
            <span v-else>新增優惠券</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                  placeholder="請輸入標題">
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                  placeholder="請輸入優惠碼">
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="due_date">
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price"
            min="0" max="100" v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="tempCoupon.is_enabled" >
              <label class="form-check-label" for="is_enabled">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" v-if="coupon.id" @click="this.$emit('editCoupon', tempCoupon)">
            確認編輯
          </button>
          <button type="button" class="btn btn-primary" v-else  @click="this.$emit('addCoupon', tempCoupon)">
            確認新增
          </button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return {
      tempCoupon:{},
      due_date:0
    }
  },
  props:['couponModal', 'coupon'],
  watch:{
    coupon(){
      this.tempCoupon = this.coupon
      var date = new Date(this.tempCoupon.due_date*1000)
      this.due_date = `${date.getFullYear()}-${ date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1}-${date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()}`
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    }
  }
}

</script>