<template>
<LoaderComponent :class="{'d-none': !isLoading}" class="loader"></LoaderComponent>
<div class="healing_Theta">
    <h1 class="text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image text-white" :style="{ backgroundImage: `url(${banner_bg})` }" style="background-position: center 70%;">
      療癒服務 <br>
      <span class="fs-3 fw-normal">{{ service.title }}</span>
    </h1>

<section class="healing_content bg-beige">
  <div class="container pt-5 pb-5 position-relative">
    <h2>{{ service.title }}</h2>
    <div v-html="service.content"></div>
  </div>
</section>

<section class="healing_reserve bg-image" :style="{ backgroundImage: `url(${order_bg})` }" v-if="service.origin_price">
  <div class="container pt-5 pb-5">
    <h2 class="text-center text-white mb-4">
      <img src="@/assets/images/tarot-card-icon.png" alt="">
      預約療癒
    </h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <v-form ref="form" class="row p-4 "  v-slot="{ errors }" @submit="addToCart" >
          <div class="col-12 mb-3">
            <label for="inputTime" class="form-label text-white">選擇療癒時間</label>
            <div class="calendar text-center">
      <div class="month">
        <button class="btn btn-outline-primary prev" @click="adjustMonth(-1)">
          <i class="fas fa-angle-left"></i>
        </button>
        <div class="date">
          <h1>{{ calendar.year }}</h1>
          <h2>{{ months[calendar.month] }}</h2>
        </div>
        <div class="btn btn-outline-primary next" @click="adjustMonth(1)">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="weekDay  d-flex">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <div class="week d-flex" v-for="i in 6" :key="'aaa' + i">
        <div
          class="day text-start ps-1"
          v-for="j in 7"
          :key="'aaa' + j"
          :data-date="calendarMonth[(i - 1) * 7 + j - 1].date"
          :data-timestamp="
            this.calculateDate(i,j).valueOf()
          "
          :class="{
            other: calendarMonth[(i - 1) * 7 + j - 1].month !== calendar.month,
            saturday: calendarMonth[(i - 1) * 7 + j - 1].day == 6,
            sunday: calendarMonth[(i - 1) * 7 + j - 1].day == 0,
            today:
              calendarMonth[(i - 1) * 7 + j - 1].year === today.year &&
              calendarMonth[(i - 1) * 7 + j - 1].month === today.month &&
              calendarMonth[(i - 1) * 7 + j - 1].date === today.date
          }"
        >
          <!-- 日期數字 -->
          <p>
            {{ calendarMonth[(i - 1) * 7 + j - 1].date }}
          </p>
          
          <!-- 週六時段 -->
          <div
            v-if="
              calculateDate(i,j) > Date.now() &&
              calculateDate(i,j) < Date.now()+86400000*60 &&
              calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
              calculateDate(i,j).getDay() === 6
            "
          >
            <input type="radio" class="btn-check" name="options" :id="calculateDate(i,j).setHours(10, 0, 0, 0)" autocomplete="off" 
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(10, 0, 0, 0)) == -1"
                  :data-session="calculateDate(i,j).setHours(10, 0, 0, 0)"
                  >
            <label class="btn btn-sm btn-outline-primary session-btn" :for="calculateDate(i,j).setHours(10, 0, 0, 0)"
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(10, 0, 0, 0)) == -1">10:00</label>

            <input type="radio" class="btn-check" name="options" :id="calculateDate(i,j).setHours(14, 0, 0, 0)" autocomplete="off" 
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(14, 0, 0, 0)) == -1"
                  :data-session="calculateDate(i,j).setHours(14, 0, 0, 0)"
                  >
            <label class="btn btn-sm btn-outline-primary session-btn" :for="calculateDate(i,j).setHours(14, 0, 0, 0)"
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(14, 0, 0, 0)) == -1">14:00</label>
            
            <input type="radio" class="btn-check" name="options" :id="calculateDate(i,j).setHours(16, 0, 0, 0)" autocomplete="off" 
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(16, 0, 0, 0)) == -1"
                  :data-session="calculateDate(i,j).setHours(16, 0, 0, 0)"
                  >
            <label class="btn btn-sm btn-outline-primary session-btn" :for="calculateDate(i,j).setHours(16, 0, 0, 0)"
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(16, 0, 0, 0)) == -1">16:00</label>

            <input type="radio" class="btn-check" name="options" :id="calculateDate(i,j).setHours(20, 0, 0, 0)" autocomplete="off" 
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(20, 0, 0, 0)) == -1"
                  :data-session="calculateDate(i,j).setHours(20, 0, 0, 0)"
                  >
            <label class="btn btn-sm btn-outline-primary session-btn" :for="calculateDate(i,j).setHours(20, 0, 0, 0)"
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(20, 0, 0, 0)) == -1">20:00</label>

          </div>

          <!-- 週間時段(一二四五) -->
          <div
            v-else-if="
             calculateDate(i,j) > Date.now() &&
             calculateDate(i,j) < Date.now()+86400000*60 &&
              calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
              (
                calculateDate(i,j).getDay() === 1 ||
                calculateDate(i,j).getDay() === 2 ||
                calculateDate(i,j).getDay() === 4 ||
                calculateDate(i,j).getDay() === 5)
            "
          >
            <input type="radio" class="btn-check" name="options" 
                  :id="calculateDate(i,j).setHours(20, 0, 0, 0)" autocomplete="off" 
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(20, 0, 0, 0)) == -1" 
                  :data-session="calculateDate(i,j).setHours(20, 0, 0, 0)">
            <label class="btn btn-sm btn-outline-primary session-btn" :for="calculateDate(i,j).setHours(20, 0, 0, 0)"
                  v-if="bookedTime.indexOf(calculateDate(i,j).setHours(20, 0, 0, 0)) == -1">20:00</label>
          </div>
        </div>
      </div>
    </div>
          </div>

          <div class="col-md-6 mb-3">
            <label for="inputName" class="form-label text-white">姓名</label>
            <!-- <input type="text" class="form-control" id="inputName" required v-model="this.tempOrder.user.name"> -->
            <v-field id="inputName" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="this.tempOrder.user.name"></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="col-md-6 mb-3">
            <label for="inputTel" class="form-label text-white">手機號碼</label>
            <!-- <input type="tel" class="form-control" id="inputTel" required  v-model="this.tempOrder.user.tel"> -->
            <v-field id="inputTel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required"  v-model="this.tempOrder.user.tel"></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label text-white">email</label>
            <!-- <input type="email" class="form-control" id="email" required  v-model="this.tempOrder.user.email"> -->
            <v-field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email" v-model="this.tempOrder.user.email"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="col-12 mb-3">
            <label for="formNote" class="form-label text-white">備註 (Line ID、帳號末5碼)</label>
            <textarea class="form-control" id="formNote" rows="3" required v-model="this.tempOrder.message"></textarea>
            <div id="formNoteHelp" class="form-text text-light">
              匯款資訊：台新銀行 812   敦南分行 <br>
              帳號：28881004008118   <br>
              戶名：沈家舟</div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-beige text-primary w-100" >送出</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</section>



</div>
</template>

<script>
// import { RouterLink } from 'vue-router'
import order_bg from '@/assets/images/tarot-stack.jpg'
import banner_bg from '@/assets/images/meditation-banner.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env


export default {
  data(){
    return {
      isLoading: false,
      banner_bg,
      order_bg,
      service: {},
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      tempOrder: {
        user:{
          name:'',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      today: {
        year: 0,
        month: 0,
        date: 0,
        day: 0
      },
      calendar: {
        year: 0,
        month: 0,
        date: 0,
        day: 0
      },
      orders: [],
      nestedOrders:[],
      total_pages:0
    }
    },
  components: {
    // RouterLink
    LoaderComponent
  },
  methods: {
    getService(){
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        // console.log(res.data.product)
        this.service = res.data.product
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getBooked(){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/orders`)
        .then((res) => {
          this.total_pages = res.data.pagination.total_pages
          this.processBooked()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(()=>{
          setTimeout(() => {
            this.isLoading = false            
          }, 1000);
        })
    },
    async processBooked() {
      for(let i=1; i<= this.total_pages; i++){
        await this.getBookedPages(i)
      }
      this.orders = this.orders.sort(
        (a, b) => a.user.address - b.user.address
      )
      // console.log(this.orders)
    },
    async getBookedPages(page){
      return new Promise((resolve)=>{
        this.$http.get(`${VITE_URL}/api/${VITE_PATH}/orders?page=${page}`)
          .then((res) => {
            if(page==1){
              this.orders = res.data.orders
            } else {
              this.orders = this.orders.concat(res.data.orders)
            }
            resolve();
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    setToday() {
      const date = new Date()
      this.today.year = this.calendar.year = date.getFullYear()
      this.today.month = this.calendar.month = date.getMonth() // 0~11
      this.today.date = this.calendar.date = date.getDate()
      this.today.day = this.calendar.day = date.getDay()
    },
    adjustYear(fix) {
      this.calendar.year += fix
    },
    adjustMonth(fix) {
      // this.calendar.month += fix 範圍
      let month = this.calendar.month + fix
      if (month > 11) {
        this.adjustYear(1)
        this.calendar.month = 0
      } else if (month < 0) {
        this.adjustYear(-1)
        this.calendar.month = 11
      } else {
        this.calendar.month = month
      }
    },
    calculateDate(i,j){
      let date =  new Date(
        this.calendarMonth[(i - 1) * 7 + j - 1].year,
        this.calendarMonth[(i - 1) * 7 + j - 1].month,
        this.calendarMonth[(i - 1) * 7 + j - 1].date
      )
      return date
    },
    addToCart(){
      const id = this.$route.params.id
      let data = {
        product_id: id,
        qty:1
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
      .then((res) => {
        console.log(res.data)
        this.addOrder()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    addOrder(){
      const selected = document.querySelector('input[name="options"]:checked').dataset.session
      this.tempOrder.user.address = selected
      const data = this.tempOrder
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
      .then(() => {
          this.$swal.fire({
          icon: 'success',
          title: '已完成預約',
          html: `
          ${new Date(parseInt(data.user.address)).toLocaleString()}  <br />
          ${this.service.title}
          `,
          footer: '到時見囉！'    
        })
        
        this.$refs.form.reset() //FIXME: not working???
        this.getBooked()
      })
      .catch((err) => {
        console.log(err)
      })
    }

  },
  computed:{
    calendarFirstDay() {
      const mDate = new Date(this.calendar.year, this.calendar.month, 1)
      const date = new Date(
        this.calendar.year,
        this.calendar.month,
        1 - mDate.getDay()
      )
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay()
      }
    },
    calendarMonth() {
      const data = []
      let date
      for (let i = 0; i < 42; i++) {
        date = new Date(
          this.calendarFirstDay.year,
          this.calendarFirstDay.month,
          this.calendarFirstDay.date + i
        )
        data.push({
          year: date.getFullYear(),
          month: date.getMonth(),
          date: date.getDate(),
          day: date.getDay()
        })
      }
      return data
    },
    bookedTime() {
      // 已經被預定的時間
      const time = []
      for (const item of this.orders) {
        time.push(item.user.address * 1)
      }
      return time
    }
  },
  mounted(){
    this.isLoading = true
    this.setToday()
    this.getBooked()
    this.getService()
  }
}
</script>

<style lang="scss">
.calendar{
  background-color: #fff5;
}
.month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  text-align: center;

}
.month i {
  cursor: pointer;
}

.day {
  font-size: 0.3rem;
  width: calc(100% / 7);

}
.day button, .day .session-btn {
  font-size: 0.3rem;
  padding: 2px;
  margin-bottom: 5px;
}
.day .booked {
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    background-color: var(--bs-light);
  }
}
.prev-date,
.next-date {
  opacity: 0.5;
}
.weekDay,
.week {
  border-bottom: 1px solid #ddd;
}
.weekDay > div {
  flex: 1 1 0%;
  line-height: 30px;
}
.week {
  border-right: 1px solid #ddd;
}
.week > div {
  position: relative;
  flex: 1 1 0%;
  min-height: 90px;
  line-height: 1.5;
  border-left: 1px solid #ddd;
  padding: 10px 0;
}
.today {
  color: #000000;
  background-color: #ece4d888;
}

.sunday {
  color:#A00
}
.saturday {
  color: #080
}
.other {
  color: #bbb;
  background-color: #ddd8;

}


</style>

