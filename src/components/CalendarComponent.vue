<template>
  <div class="calendar text-center pt-3">
    <div class="month d-flex justify-content-between align-items-center text-center px-3">
      <button type="button" class="btn btn-outline-primary prev" @click="adjustMonth(-1)">
        <i class="fas fa-angle-left pointer"></i>
      </button>
      <div class="date">
        <h1>{{ calendar.year }}</h1>
        <h2>{{ months[calendar.month] }}</h2>
      </div>
      <div class="btn btn-outline-primary next" @click="adjustMonth(1)">
        <i class="fas fa-angle-right pointer"></i>
      </div>
    </div>
    <div class="weekDay  d-flex">
      <div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>
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
        <p>{{ calendarMonth[(i - 1) * 7 + j - 1].date }}</p>
        
        <!-- 週六時段 -->
        <div
          v-if="
            calculateDate(i,j) > Date.now() &&
            calculateDate(i,j) < Date.now()+86400000*60 &&
            calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
            calculateDate(i,j).getDay() === 6
          "
        >
        <template v-for="hour in [10,14,16,20]" :key="calculateDate(i,j).setHours(hour, 0, 0, 0)">
          <span v-if="bookedTime.indexOf(calculateDate(i,j).setHours(hour, 0, 0, 0)) == -1">
            <input type="radio" class="btn-check" name="options" :id="calculateDate(i,j).setHours(hour, 0, 0, 0)"
                  :value="calculateDate(i,j).setHours(hour, 0, 0, 0)"  @click="selectSession(calculateDate(i,j).setHours(hour, 0, 0, 0))">
            <label class="btn btn-sm btn-outline-primary session-btn me-1" :for="calculateDate(i,j).setHours(hour, 0, 0, 0)">{{hour}}:00</label>
          </span>
        </template>
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
          ">
          <span v-if="bookedTime.indexOf(calculateDate(i,j).setHours(20, 0, 0, 0)) == -1" >
            <input type="radio" class="btn-check" name="options" 
                  :id="calculateDate(i,j).setHours(20, 0, 0, 0)"
                  :value="calculateDate(i,j).setHours(20, 0, 0, 0)"  @click="selectSession(calculateDate(i,j).setHours(20, 0, 0, 0))"> 
            <label class="btn btn-sm btn-outline-primary session-btn" :for="calculateDate(i,j).setHours(20, 0, 0, 0)">20:00</label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
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
  props:['time', 'isLoader'],
  methods: {
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
            this.$emit('closeLoader')
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
    selectSession(timestamp){
      this.$emit('selectSession', timestamp)
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
      const time = []
      for (const item of this.orders) {
        time.push(item.user.address * 1)
      }
      return time
    }
  },
  mounted(){
    this.setToday()
    this.getBooked()
  }
}
</script>
