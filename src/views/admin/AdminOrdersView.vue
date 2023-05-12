<template>
  <LoaderComponent :class="{'d-none': !isLoading}" class="loader" />
  <div class="container py-80">
    <div class="calendar text-center">
      <div class="month  d-flex justify-content-between align-items-center text-center px-3">
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
                @click.prevent="
                this.selectTempOrder({
                  products:{
                    product: {
                      category: 'closed',
                      title: 'closed'
                    }
                  },
                  user:{
                    address: calculateDate(i,j).setHours(hour, 0, 0, 0)
                  }
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
                this.selectTempOrder({
                  products:{
                    product: {
                      category: 'closed',
                      title: 'closed'
                    }
                  },
                  user:{
                    address: calculateDate(i,j).setHours(20, 0, 0, 0)
                  }
                })"
            >
              20:00
            </button>
          </div>

          <!-- 已預約時段 -->
          <template v-for="(orders, day) in formatOrder" :key="day">
            <template v-if="calculateDate(i,j).valueOf()==day">
                <a v-for="item in orders" :key="item.id" href="#" class="booked d-block d-flex pointer " 
                    :class="[
                      item.user.name=='closed' && calculateDate(i,j) > Date.now() ? 'text-muted text-decoration-none' : '' ,
                      calculateDate(i,j) > Date.now() ? '' : 'text-danger' 
                    ]"
                    @click.prevent="
                    this.selectTempOrder(item)"
                    >
                    <span class="d-none d-md-block">{{ new Date(Number(item.user.address)).getHours() }}:00 </span>
                    <span class="d-none d-sm-block">{{ item.user.name }} </span>
                    <span>{{ item.products.product.title }}</span>
                    
                </a>                
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="orderModal" ref="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
    <AdminOrdersComponent :order="tempOrder" :courses="courses" :services="services" :closed="closed" @get-booked="getBooked"/>
</div>
</template>
<script>
import LoaderComponent from '@/components/LoaderComponent.vue'
import AdminOrdersComponent from '@/components/AdminOrdersComponent.vue'
import { Modal } from 'bootstrap'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      months: [
        'January','February','March',
        'April','May','June',
        'July','August','September',
        'October','November','December'
      ],
      orders: [],
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
    LoaderComponent, AdminOrdersComponent
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
    selectTempOrder(order) {
      this.tempOrder = order
      this.orderModal.show()
    },
    setToday() {
      const date = new Date()
      this.today.year = this.calendar.year = date.getFullYear()
      this.today.month = this.calendar.month = date.getMonth()
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
        const day = new Date(Number(item.user.address)).setHours(0, 0, 0, 0)
        if (!newOrders[day]) {
          newOrders[day] = []
        }
        newOrders[day].push({
          "create_at": item.create_at,
          "id": item.id,
          "is_paid": item.is_paid,
          "products": Object.values(item.products)[0],
          "total": item.total,
          "user": item.user,
          "message": item.message,
          "num": item.num
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
