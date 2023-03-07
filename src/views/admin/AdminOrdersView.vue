<template>
  <div class="container">
    <div class="calendar">
      <div class="month">
        <button class="btn btn-outline-primary prev" @click="changeMonth(-1)">
          <i class="fas fa-angle-left"></i>
        </button>
        <div class="date">
          <h1></h1>
          <h2></h2>
        </div>
        <div class="btn btn-outline-primary next" @click="changeMonth(1)">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="weekdays">
        <div class="">日</div>
        <div class="">一</div>
        <div class="">二</div>
        <div class="">三</div>
        <div class="">四</div>
        <div class="">五</div>
        <div class="">六</div>
      </div>
      
      <div class="days"></div>
    </div>
  </div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderModal" >
  新增預約/關閉時段
</button>

<!-- Modal -->
<div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="orderModalLabel">新增預約/關閉時段</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3 row">
          <label for="orderTime" class="col-sm-2 col-form-label">時段</label>
          <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" readonly id="orderTime" value="2023/03/18 20:00">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userName" class="col-sm-2 col-form-label">名字</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userName">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userPhone" class="col-sm-2 col-form-label">電話</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="userPhone">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="userEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="userEmail">
          </div>
        </div>
        <div class="mb-3 row">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="closed">
            <label class="form-check-label" for="inlineCheckbox1">關閉時段</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="service">
            <label class="form-check-label" for="inlineCheckbox2">服務</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="course">
            <label class="form-check-label" for="inlineCheckbox3">課程</label>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-10">
            <select class="form-select" aria-label="Default select example">
              <!-- <option value="1">One</option> -->
            </select>
          </div>
        </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger me-auto" data-bs-dismiss="modal">刪除預約</button>
        <button type="button" class="btn btn-primary">儲存編輯</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { RouterLink } from 'vue-router'

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data(){
    return {
      orders:[],
      date:{},
      tempOrder:{},
    }
  },
  components: {
    RouterLink
  },
  methods:{
    renderCalendar(){
      this.date.setDate(1);
      this.date.setHours('00', '00', '00');

      const monthDays = document.querySelector(".days")
      const lastDate = new Date(this.date.getFullYear(),this.date.getMonth()+1, 0).getDate()
      const prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate()
      const firstDayIndex = this.date.getDay()
      const lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay()
      const nextDays = 7 - lastDayIndex -1
      const months = [
        'January', 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"]
      document.querySelector(".date h1").innerHTML = months[this.date.getMonth()]
      document.querySelector(".date h2").innerHTML = this.date.getFullYear()

      let days = ""
      // 上月
      for(let x = firstDayIndex; x>0; x--){
        days += `<div class="prev-date"><p>${prevLastDay - x + 1}</p></div>`
      }
      // 本月
      for(let i=1; i <= lastDate; i++){
        if(i === new Date().getDate() && this.date.getMonth() === new Date().getMonth() && this.date.getYear() === new Date().getYear()){
          days += `<div class="bg-light" data-date="${Math.floor((new Date(this.date).setDate(i))/1000)*1000}"><p>${i}</p></div>` 
        } else{
          days += `<div data-date="${Math.floor((new Date(this.date).setDate(i))/1000)*1000}"><p>${i}</p></div>`    
        }
      }
      // 下月
      for(let j = 1; j<= nextDays; j++){
        days += `<div class="next-date"><p>${j}</p></div>`
      }
      
      monthDays.innerHTML = days
    },
    changeMonth(direction){
      this.date.setMonth(this.date.getMonth() + direction)
      this.renderCalendar()
      this.renderSession()  
    },
    getBooked(){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders`)
      .then((res) => {
        this.orders = res.data.orders.sort((a,b) => a.user.address - b.user.address)
        this.renderSession()
        this.renderOrders()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    renderSession(){
      const sessionDays = document.querySelectorAll("[data-date]")
      let now = new Date()
      sessionDays.forEach(function(item,index){
        let day = new Date(Number(item.dataset.date)).getDay()
        if(item.dataset.date > now && item.dataset.date < new Date(now).setMonth(now.getMonth()+2)){
          if(day==6){
            sessionDays[index].innerHTML = `
              <p>${index+1}</p>
              <button class="btn btn-sm btn-outline-primary" data-session="${new Date(Number(item.dataset.date)).setHours(10, 0, 0, 0)}">10:00</button>
              <button class="btn btn-sm btn-outline-primary" data-session="${new Date(Number(item.dataset.date)).setHours(14, 0, 0, 0)}">14:00</button>
              <button class="btn btn-sm btn-outline-primary" data-session="${new Date(Number(item.dataset.date)).setHours(16, 0, 0, 0)}">16:00</button>
              <button class="btn btn-sm btn-outline-primary" data-session="${new Date(Number(item.dataset.date)).setHours(20, 0, 0, 0)}">20:00</button>
            `
          } else if (day==1 || day == 2 || day==4 || day==5){
            sessionDays[index].innerHTML = `
              <p>${index+1}</p>
              <button class="btn btn-sm btn-outline-primary" data-session="${new Date(Number(item.dataset.date)).setHours(20, 0, 0, 0)}">20:00</button>
            `
          }
        }
      })
      this.disableBooked(this.orders)
    },

    disableBooked(booked){
      booked.forEach(function(item){
        if(document.querySelector(`[data-session='${item.user.address}']`) != undefined){
          document.querySelector(`[data-session='${item.user.address}']`).classList.add('d-none')
        }
      })
    },

    renderOrders(){
      this.orders.forEach(function(item){
        let time =  new Date(Number(item.user.address)).getHours() 
        let key = Object.keys(item.products)[0]
        let product = item.products[key].product
        let day = new Date(Number(item.user.address)).setHours(0, 0, 0, 0)
        document.querySelector(`[data-date='${day}']`).innerHTML += `<p>${time}:00 ${item.user.name} ${product.title}</p>`
        
      })
    },
  },
  mounted(){
    this.getBooked()
    this.date = new Date();
    this.renderCalendar();
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

.month i {
  cursor: pointer;
}


.weekdays {
  display: flex;
  align-items: center;
}

.weekdays div {
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.days div {
  padding: 0.3rem;
  width: calc(100% / 7);
  border: 1px solid;
}
.days button {
  font-size: 0.3rem;
  padding: 2px;
  margin-bottom: 5px;
}

.prev-date, .next-date {
  opacity: 0.5
}

</style>

