<template>
  <LoaderComponent :class="{'d-none': !isLoading}" class="loader" />
  <div class="container py-80">
    <div class="calendar text-center">
      <div class="month">
        <button type="button" class="btn btn-outline-primary prev" @click="adjustMonth(-1)">
          <i class="fas fa-angle-left poiner"></i>
        </button>
        <div class="date">
          <h1>{{ calendar.year }}</h1>
          <h2>{{ months[calendar.month] }}</h2>
        </div>
        <div class="btn btn-outline-primary next" @click="adjustMonth(1)">
          <i class="fas fa-angle-right pointer"></i>
        </div>
      </div>
      <div class="weekDay d-flex">
        <div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>
      </div>
      <div class="week d-flex" v-for="i in 6" :key="'aaa' + i">
        <div
          class="day text-start ps-1"
          v-for="j in 7"
          :key="'aaa' + j"
          :data-date="calendarMonth[(i - 1) * 7 + j - 1].date"
          :data-timestamp="this.calculateDate(i,j).valueOf()"
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
          <p>{{ calendarMonth[(i - 1) * 7 + j - 1].date }}</p>
          
          <!-- 週六時段 -->
          <div
            v-if="
              calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
              calculateDate(i,j).getDay() === 6
            "
          >
            <template v-for="hour in [10, 14, 16, 20]" :key="calculateDate(i,j).setHours(hour, 0, 0, 0)">
              <button
                v-if="calculateDate(i,j) > Date.now() &&
                bookedTime.indexOf(calculateDate(i,j).setHours(hour, 0, 0, 0)) == -1"
                type="button"
                :data-session="
                  calculateDate(i,j).setHours(hour, 0, 0, 0)
                "
                class="btn btn-sm btn-outline-primary"
                @click.prevent="this.selectTempOrder(
                  calculateDate(i,j).setHours(hour, 0, 0, 0), {
                    product: {
                      category: 'closed',
                      title: 'closed'
                    },
                    time: calculateDate(i,j).setHours(hour, 0, 0, 0)
                  })"
              >
                {{hour}}:00
              </button>
            </template>
          </div> 

          <!-- 週間時段(一二四五) -->
          <div
            v-else-if="
              calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
              (
                calculateDate(i,j).getDay() === 1 ||
                calculateDate(i,j).getDay() === 2 ||
                calculateDate(i,j).getDay() === 4 ||
                calculateDate(i,j).getDay() === 5)
            "
          >
            <button
              v-if="
                calculateDate(i,j) > Date.now() &&
                bookedTime.indexOf(calculateDate(i,j).setHours(20, 0, 0, 0)) == -1
                "
              type="button"
              class="btn btn-sm btn-outline-primary"
              :data-session="calculateDate(i,j).setHours(20, 0, 0, 0)"
              @click.prevent="
                this.selectTempOrder(
                  calculateDate(i,j).setHours(20, 0, 0, 0), {
                  product: {
                    category: 'closed',
                    title: 'closed'
                  },
                  time: calculateDate(i,j).setHours(20, 0, 0, 0)
                })"
            >
              20:00
            </button>
          </div>

          <!-- 已預約時段 -->
          <template v-for="(it, timestamp) in formatOrder" :key="timestamp">
            <template v-for="(item, index) in formatOrder[timestamp]" :key="'serve' + index">
              <a href="#" class="booked d-block pointer"
                :class="[
                  item.user.name=='closed' && calculateDate(i,j) > Date.now() ? 'text-muted text-decoration-none' : '' ,
                  calculateDate(i,j) > Date.now() ? '' : 'text-danger' 
                ]"
                @click.prevent="
                  this.selectTempOrder(new Date (parseInt(timestamp)).setHours(item.shownTime, 0, 0, 0), {
                    shownTime: new Date (parseInt(timestamp)).setHours(item.shownTime, 0, 0, 0),
                    time: item.user.address,
                    id: item.id,
                    name: item.user.name,
                    phone: item.user.tel,
                    email: item.user.email,
                    message: item.message,
                    is_paid: item.is_paid,
                    product: {
                      category: item.product.category,
                      title: item.product.title,
                      id: item.product.id,
                      key: item.key
                    },
                    num: item.num
                  })"
                v-if="timestamp == calculateDate(i,j).valueOf()"
              >
                {{ item.shownTime + ':00' }} 
                <span class="d-none d-md-inline">{{ item.user.name }} </span> 
                <span class="d-none d-sm-inline">{{ item.product.title }}</span>
              </a>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="orderModal" ref="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
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
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio1" value="closed" v-model="this.tempOrder.product.category">
              <label class="form-check-label" for="flexRadio1">關閉時段</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio2" value="service" v-model="this.tempOrder.product.category">
              <label class="form-check-label" for="flexRadio2">服務</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio3" value="course" v-model="this.tempOrder.product.category">
              <label class="form-check-label" for="flexRadio3">課程</label>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-10">
            <select class="form-select" v-if="this.tempOrder.product.category=='closed'" v-model="this.tempOrder.product.id">
              <option :value="closed[0].id"  :selected="this.tempOrder.product.id==closed[0].id">closed</option>
            </select>
            <select class="form-select" v-else-if="this.tempOrder.product.category=='service'" v-model="this.tempOrder.product.id">
              <option :value="service.id" v-for="service in services" :key="service.id" :selected="this.tempOrder.product.id==service.id">
                {{ service.title }}
              </option>
            </select>
            <select class="form-select" v-else-if="this.tempOrder.product.category=='course'" v-model="this.tempOrder.product.id">
              <option :value="course.id" v-for="course in courses" :key="course.id" :selected="this.tempOrder.product.id==course.id">{{ course.title }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="orderTime" class="col-sm-2 col-form-label">時段</label>
          <div class="col-sm-10">
            <input 
              type="text" 
              class="form-control-plaintext" 
              readonly
              id="orderTime"
              v-model="this.tempOrder.shownTime"
            >
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userName" class="col-sm-2 col-form-label">名字</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userName" v-model="this.tempOrder.name">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userPhone" class="col-sm-2 col-form-label">電話</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="userPhone" v-model="this.tempOrder.phone">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="userEmail" v-model="this.tempOrder.email">
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
</div>
</template>
<script>
import LoaderComponent from '@/components/LoaderComponent.vue'
import { Modal } from 'bootstrap'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
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
      orders: [],
      tempOrder: {
        id:'',
        name: '',
        phone: '',
        email: '',
        message: '',
        time: 0,
        is_paid: false,
        product: {
          title: '',
          category: '',
          id: ''
        }
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
      courses:[],
      services:[],
      closed:[],
      total_pages: 0,
      orderModal:null
    }
  },
  components: {
    LoaderComponent
  },
  methods: {
    getBooked(){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders`)
        .then((res) => {
          this.total_pages = res.data.pagination.total_pages
          this.processBooked()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async processBooked(){
      for(let i=1; i<= this.total_pages; i++){
        await this.getBookedPages(i)
      }
      this.orders = this.orders.sort(
        (a, b) => a.user.address - b.user.address
      )
      setTimeout(() => {
        this.isLoading = false            
      }, 1000);
    },
    getBookedPages(page) {
      return new Promise((resolve)=>{
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`)
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
    selectTempOrder(timestamp,order) {
      let day
      switch(new Date(timestamp).getDay()){
        case 1: day='(一)'; break;
        case 2: day='(二)'; break;
        case 4: day='(四)'; break;
        case 5: day='(五)'; break;
        case 6: day='(六)'; break;
      }
      let shownTime = new Date(timestamp).toLocaleDateString()+ day+' '+  new Date(timestamp).toLocaleTimeString("en-GB")
      this.tempOrder = {
        ...order,
        shownTime
      }
      this.orderModal.show()
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
    getProducts(){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
      .then((res) => {
        res.data.products.forEach((item)=>{
          if(item.category=='course'){
            this.courses.push({title:item.title, id:item.id})
          } else if(item.category=='service'){
            this.services.push({title:item.title, id:item.id})
          } else {
            this.closed.push({title:item.title, id:item.id})
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
    },
    addToCart(){
      const data = {
        product_id: this.tempOrder.product.id,
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
          name: this.tempOrder.name,
          email: this.tempOrder.email,
          tel: this.tempOrder.phone,
          address: this.tempOrder.time.toString()
        },
        message:this.tempOrder.message
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
      .then(() => {
        alert("已成功預約")
        this.getBooked()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    editOrder(id){
      let key = this.tempOrder.product.key
      const data =  {
        "create_at": this.tempOrder.time/1000,
        "is_paid": this.tempOrder.is_paid,
        "message": this.tempOrder.message,
        "products": {
          [key]: {
            "id": this.tempOrder.product.id,
            "product": this.tempOrder.product,
            "product_id": this.tempOrder.product.id,
            "qty": "1"
          }
        },
        "user": {
          "address": this.tempOrder.time.toString(),
          "email": this.tempOrder.email,
          "name": this.tempOrder.name,
          "tel": this.tempOrder.phone
        },
        "num": this.tempOrder.num
      }
      this.$http.put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${id}`, { data })
      .then(() => {
        alert("預約資料已修改")
        this.getBooked()
      })
      .catch((err) => {
        console.log(err)
      })
      console.log(this.tempOrder)
    },
    deleteOrder(id){
      if(window.confirm("確定要刪除?")){
        this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${id}`)
        .then(() => {
          alert("預約已刪除")
          this.isLoading = true
          this.getBooked()
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  },
  computed: {
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
    formatOrder() {
      const newOrders = {}
      for (const item of this.orders) {
        const key = Object.keys(item.products)[0]
        const product = item.products[key].product
        const day = new Date(Number(item.user.address)).setHours(0, 0, 0, 0)
        if (!newOrders[day]) {
          newOrders[day] = []
        }
        newOrders[day].push({
          id: item.id,
          product: product,
          key: key,
          user: item.user,
          message: item.message,
          time: item.user.address,
          shownTime: new Date(Number(item.user.address)).getHours(),
          is_paid: item.is_paid,
          num: item.num
        })
      }
      return newOrders
    },
    bookedTime() {
      const time = []
      for (const item of this.orders) {
        time.push(item.user.address * 1)
      }
      return time
    }
  },
  mounted() {
    this.isLoading = true

    this.setToday()
    this.getBooked()
    this.getProducts()

    this.orderModal = new Modal("#orderModal")
  }
}
</script>

<style lang="scss">
.month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
}
.day {
  font-size: 0.3rem;
  width: calc(100% / 7);
}
.day button {
  font-size: 0.3rem;
  padding: 2px;
  margin-bottom: 5px;
}
.day .booked {
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    background-color: var(--bs-light);
  }
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
  background-color: #ece4d8;
}
.sunday {
  color:#A00
}
.saturday {
  color: #080
}
.other {
  color: #bbb;
  background-color: #ddd;
}


</style>