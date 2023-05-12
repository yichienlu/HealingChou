<template>
  <LoaderComponent :class="{'d-none': !isLoading}" class="loader"></LoaderComponent>
  <div class="healing_Theta">
    <h1 class="text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image text-white" :style="{ backgroundImage: `url(${banner_bg})` }" style="background-position: center 70%;">
      療癒服務 <br>
      <span class="fs-3 fw-normal">{{ service.title }}</span>
    </h1>
    <section class="healing_content bg-beige px-3">
      <div class="container pt-5 pb-5 position-relative">
        <h2>{{ service.title }}</h2>
        <div v-html="service.content"></div>
        <div>收費：{{ $filters.currency(service.price) }} / {{ service.unit }}</div>
      </div>
    </section>
    <section class="healing_reserve bg-image" :style="{ backgroundImage: `url(${order_bg})` }">
      <div class=" py-5">
        <h2 class="text-center text-white mb-4">
          <img src="@/assets/images/tarot-card-icon.png" alt="預約療癒">
          預約療癒
        </h2>
        <div class="container px-3" v-if="service.origin_price">
          <v-form ref="form" class="row service-form"  v-slot="{ errors }" @submit="addToCart" >
            <div class=" mb-3">
              <label for="inputTime" class="form-label text-white">選擇療癒時間</label>
              <CalendarComponent @selectSession="selectSession" @closeLoader="closeLoader" />
            </div>
            <div class="mb-3">
              <label for="sessionTime" class="form-label text-white">時段<span>*</span></label>
              <v-field id="sessionTime" name="時段" type="text" class="form-control " :class="{'is-invalid': errors['時段']}" placeholder="請在上方月曆點選時段" rules="required" v-model="this.selectedTime" :readonly="true"></v-field>
              <error-message name="時段" class="invalid-feedback"></error-message>
            </div>
            <div class="col-md-6 mb-3">
              <label for="inputName" class="form-label text-white">姓名<span>*</span></label>
              <v-field id="inputName" name="姓名" type="text" class="form-control " :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="this.tempOrder.user.name"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="col-md-6 mb-3">
              <label for="inputTel" class="form-label text-white">手機號碼<span>*</span></label>
              <v-field id="inputTel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話"  :rules="isPhone"  v-model="this.tempOrder.user.tel"></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>              
            <div class="mb-3">
              <label for="email" class="form-label text-white">email<span>*</span></label>
              <v-field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email" v-model="this.tempOrder.user.email"></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="formNote" class="form-label text-white">備註 (Line ID、帳號末5碼)</label>
              <textarea class="form-control" id="formNote" rows="3" required v-model="this.tempOrder.message"></textarea>
              <div id="formNoteHelp" class="form-text text-light">
                <div class="fw-bold">收費： {{ service.price }} 元 / {{ service.unit }}</div>
                <div>
                  匯款資訊：台新銀行 812   敦南分行 <br>
                  帳號：28881004008118   <br>
                  戶名：沈家舟</div>                  
                </div>
            </div>
            <div class="">
              <button type="submit" class="btn btn-beige text-primary w-100" >送出</button>
            </div>
          </v-form>
          
        </div>
        <div class="d-flex justify-content-center" v-else>
          <div class="d-inline-block p-3" style="background-color: #fffA;">
            <p>請聯繫舟舟報名</p>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex justify-content-between">
                <span class="me-4">Facebook: </span>
                <a href="https://www.facebook.com/healingchou" target="_blank" class="text-decoration-underline">healingchou</a>
              </li>
              <li class="mb-2 d-flex justify-content-between">
                <span>Instagram:</span>
                <a href="https://www.instagram.com/chouhealer/" target="_blank" class="text-decoration-underline">chouhealer</a>
              </li>
              <li class="mb-2 d-flex justify-content-between">
                <span>Line: </span>
                <a href="https://line.me/R/ti/p/%40655bistu" target="_blank" class="text-decoration-underline">@655bistu</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import order_bg from '@/assets/images/tarot-stack.jpg'
import banner_bg from '@/assets/images/meditation-banner.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'
import CalendarComponent from '@/components/CalendarComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      isLoading: false,
      banner_bg,
      order_bg,
      service: {},
      tempOrder: {
        user:{
          name:'',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      selectedTime:'',
    }
  },
  components: {
    LoaderComponent,
    CalendarComponent
  },
  methods: {
    getService(){
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        this.service = res.data.product
      })
      .catch((err) => {
        console.log(err)
      })
    },
    selectSession(timestamp){
      this.tempOrder.user.address = timestamp
      const f = new Intl.DateTimeFormat('zh-TW', {
        dateStyle: 'full',
        timeStyle: 'short',
        hour12: false
      });
      this.selectedTime = timestamp ? f.format((parseInt(timestamp))) : ''
    },
    addToCart(value, {resetForm}){
      const id = this.$route.params.id
      let data = {
        product_id: id,
        qty:1
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
      .then(() => {
        this.addOrder(resetForm)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    addOrder(resetForm){
      const data = this.tempOrder
      const selected = document.querySelector('input[name="options"]:checked').value
      this.tempOrder.user.address = selected
      const f = new Intl.DateTimeFormat('zh-TW', { dateStyle: 'full', timeStyle: 'short', hour12: false});
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
      .then(() => {
          this.$swal.fire({
          icon: 'success',
          title: '已完成預約',
          html: `
          ${f.format((parseInt(this.tempOrder.user.address)))}  <br />
          ${this.service.title}
          `,
          footer: '到時見囉！'    
        }).then(()=>{
          resetForm()
          this.$router.push('/services')
        })
      })
      .catch((err) => {
        console.log(err)
      })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的手機號碼'
    },
    closeLoader(){
      this.isLoading = false
    }
  },
  mounted(){
    this.isLoading = true
    this.getService()
    if(!this.service.origin_price){
      setTimeout(() => {
        this.isLoading = false            
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
.service-form {
  .form-control.is-invalid{
    border-color: #F55
  }
  .invalid-feedback{
    color: #F55
  }
  #inputName, #sessionTime, #inputTel, #email, #formNote {
    color: white;
  }
  #inputName::placeholder, #sessionTime::placeholder, #inputTel::placeholder, #email::placeholder, #formNote:focus{
    color: var(--bs-light)
  }
  #inputName:focus, #sessionTime:focus, #inputTel:focus, #email:focus, #formNote:focus{
    background-color: #FFF8;
    color: var(--bs-primary)
  }
  input:-webkit-autofill{
    border: 1px solid white;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px var(--bs-primary) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill:focus{
    border: 1px solid white;
    -webkit-text-fill-color:  var(--bs-light);
    -webkit-box-shadow: 0 0 0px 1000px var(--bs-secondary) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
}
</style>

