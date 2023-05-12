<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="orderModalLabel" v-if="this.tempOrder.id">修改預約</h1>
        <h1 class="modal-title fs-5" id="orderModalLabel" v-else>新增預約/關閉時段</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3 row">
          <legend class="col-form-label col-sm-2 pt-0">類別</legend>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio1" value="closed" v-model="this.tempOrder.products.product.category">
              <label class="form-check-label" for="flexRadio1">關閉時段</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio2" value="service" v-model="this.tempOrder.products.product.category">
              <label class="form-check-label" for="flexRadio2">服務</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio3" value="course" v-model="this.tempOrder.products.product.category">
              <label class="form-check-label" for="flexRadio3">課程</label>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-10">
            <select class="form-select" v-if="this.tempOrder.products.product.category=='closed'" v-model="this.tempOrder.products.product.id">
              <option :value="closed[0].id"  :selected="this.tempOrder.products.product.id==closed[0].id">closed</option>
            </select>
            <select class="form-select" v-else-if="this.tempOrder.products.product.category=='service'" v-model="this.tempOrder.products.product.id">
              <option :value="service.id" v-for="service in services" :key="service.id" :selected="this.tempOrder.products.product.id==service.id">
                {{ service.title }}
              </option>
            </select>
            <select class="form-select" v-else-if="this.tempOrder.products.product.category=='course'" v-model="this.tempOrder.products.product.id">
              <option :value="course.id" v-for="course in courses" :key="course.id" :selected="this.tempOrder.products.product.id==course.id">{{ course.title }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="orderTime" class="col-sm-2 col-form-label">時段</label>
          <div class="col-sm-10">
            {{ new Date(+this.tempOrder.user.address).toLocaleDateString()}} 
            ({{ ["日","一","二","三","四","五","六"][new Date(+this.tempOrder.user.address).getDay()] }})
            {{ new Date(+this.tempOrder.user.address).toLocaleTimeString() }}
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userName" class="col-sm-2 col-form-label">名字</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userName" v-model="this.tempOrder.user.name">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userPhone" class="col-sm-2 col-form-label">電話</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="userPhone" v-model="this.tempOrder.user.tel">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="userEmail" v-model="this.tempOrder.user.email">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="message" class="col-sm-2 col-form-label">備註</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="message" v-model="this.tempOrder.message">
          </div>
        </div>
        <div class="mb-3 form-check">
          <input class="form-check-input" type="checkbox" value="" id="isPaid" v-model="this.tempOrder.is_paid">
          <label class="form-check-label" for="isPaid">
            確認付款
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger me-auto" data-bs-dismiss="modal" v-if="this.tempOrder.id" @click="deleteOrder(this.tempOrder.id)">刪除預約</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  v-if="this.tempOrder.id" @click="this.editOrder(this.tempOrder.id)">儲存編輯</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  v-else @click="this.addToCart">新增預約</button>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      tempOrder: {
        id:'',
        products:{
          product:{
          }
        },
        user:{
          address:""
        }
      },
    }
  },
  props:['order', 'courses', 'services', 'closed'],
  methods:{
    addToCart(){
      const data = {
        product_id: this.tempOrder.products.product.id,
        qty: 1
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
      .then(() => {
        this.addOrder()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    addOrder(){
      const data = {
        user:{
          name: this.tempOrder.user.name,
          email: this.tempOrder.user.email,
          tel: this.tempOrder.user.tel,
          address: this.tempOrder.user.address.toString()
        },
        message:this.tempOrder.message
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
      .then(() => {
        alert("已成功預約")
        this.$emit('get-booked')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    editOrder(id){
      const data =  {
        "create_at": this.tempOrder.create_at,
        "id": this.tempOrder.id,
        "is_paid": this.tempOrder.is_paid,
        "products": {
          [this.tempOrder.products.id]: this.tempOrder.products
        },
        "total": this.tempOrder.total,
        "user": this.tempOrder.user,
        "num": this.tempOrder.num,
        "message": this.tempOrder.message
      }
      this.$http.put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${id}`, { data })
      .then(() => {
        alert("預約資料已修改")
        this.$emit('get-booked')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteOrder(id){
      if(window.confirm("確定要刪除?")){
        this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${id}`)
        .then(() => {
          alert("預約已刪除")
          this.$emit('get-booked')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    closeModal(){
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
}

</script>