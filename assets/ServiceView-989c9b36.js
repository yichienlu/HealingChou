import{o as C,_ as O}from"./tarot-card-icon-5dc24475.js";import{L as H}from"./LoaderComponent-a19a300c.js";import{_ as L,o as c,c as d,b as e,t as u,F as g,h as D,n as p,j as k,r as b,d as h,i as T,f as _,e as E,k as I,v as F,g as N}from"./index-02c95cdd.js";const P="/HealingChou/assets/meditation-banner-f2603b7b.jpg",{VITE_URL:V,VITE_PATH:S}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{months:["January","February","March","April","May","June","July","August","September","October","November","December"],today:{year:0,month:0,date:0,day:0},calendar:{year:0,month:0,date:0,day:0},orders:[],nestedOrders:[],total_pages:0}},props:["time","isLoader"],methods:{getBooked(){this.$http.get(`${V}/api/${S}/orders`).then(s=>{this.total_pages=s.data.pagination.total_pages,this.processBooked()}).catch(s=>{console.log(s)}).finally(()=>{setTimeout(()=>{this.$emit("closeLoader")},1e3)})},async processBooked(){for(let s=1;s<=this.total_pages;s++)await this.getBookedPages(s);this.orders=this.orders.sort((s,t)=>s.user.address-t.user.address)},async getBookedPages(s){return new Promise(t=>{this.$http.get(`${V}/api/${S}/orders?page=${s}`).then(r=>{s==1?this.orders=r.data.orders:this.orders=this.orders.concat(r.data.orders),t()}).catch(r=>{console.log(r)})})},setToday(){const s=new Date;this.today.year=this.calendar.year=s.getFullYear(),this.today.month=this.calendar.month=s.getMonth(),this.today.date=this.calendar.date=s.getDate(),this.today.day=this.calendar.day=s.getDay()},adjustYear(s){this.calendar.year+=s},adjustMonth(s){let t=this.calendar.month+s;t>11?(this.adjustYear(1),this.calendar.month=0):t<0?(this.adjustYear(-1),this.calendar.month=11):this.calendar.month=t},calculateDate(s,t){return new Date(this.calendarMonth[(s-1)*7+t-1].year,this.calendarMonth[(s-1)*7+t-1].month,this.calendarMonth[(s-1)*7+t-1].date)},selectSession(s){this.$emit("selectSession",s)}},computed:{calendarFirstDay(){const s=new Date(this.calendar.year,this.calendar.month,1),t=new Date(this.calendar.year,this.calendar.month,1-s.getDay());return{year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),day:t.getDay()}},calendarMonth(){const s=[];let t;for(let r=0;r<42;r++)t=new Date(this.calendarFirstDay.year,this.calendarFirstDay.month,this.calendarFirstDay.date+r),s.push({year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),day:t.getDay()});return s},bookedTime(){const s=[];for(const t of this.orders)s.push(t.user.address*1);return s}},mounted(){this.setToday(),this.getBooked()}},U={class:"calendar text-center pt-3"},B={class:"month d-flex justify-content-between align-items-center text-center px-3"},A=e("i",{class:"fas fa-angle-left pointer"},null,-1),q=[A],Y={class:"date"},z=e("i",{class:"fas fa-angle-right pointer"},null,-1),J=[z],W=e("div",{class:"weekDay d-flex"},[e("div",null,"日"),e("div",null,"一"),e("div",null,"二"),e("div",null,"三"),e("div",null,"四"),e("div",null,"五"),e("div",null,"六")],-1),$=["data-date","data-timestamp"],G={key:0},K={key:0},Q=["id","value","onClick"],X=["for"],Z={key:1},j={key:0},ee=["id","value","onClick"],te=["for"];function se(s,t,r,f,o,a){return c(),d("div",U,[e("div",B,[e("button",{type:"button",class:"btn btn-outline-primary prev",onClick:t[0]||(t[0]=l=>a.adjustMonth(-1))},q),e("div",Y,[e("h1",null,u(o.calendar.year),1),e("h2",null,u(o.months[o.calendar.month]),1)]),e("div",{class:"btn btn-outline-primary next",onClick:t[1]||(t[1]=l=>a.adjustMonth(1))},J)]),W,(c(),d(g,null,D(6,l=>e("div",{class:"week d-flex",key:"aaa"+l},[(c(),d(g,null,D(7,n=>e("div",{class:p(["day text-start ps-1",{other:a.calendarMonth[(l-1)*7+n-1].month!==o.calendar.month,saturday:a.calendarMonth[(l-1)*7+n-1].day==6,sunday:a.calendarMonth[(l-1)*7+n-1].day==0,today:a.calendarMonth[(l-1)*7+n-1].year===o.today.year&&a.calendarMonth[(l-1)*7+n-1].month===o.today.month&&a.calendarMonth[(l-1)*7+n-1].date===o.today.date}]),key:"aaa"+n,"data-date":a.calendarMonth[(l-1)*7+n-1].date,"data-timestamp":this.calculateDate(l,n).valueOf()},[e("p",null,u(a.calendarMonth[(l-1)*7+n-1].date),1),a.calculateDate(l,n)>Date.now()&&a.calculateDate(l,n)<Date.now()+864e5*60&&a.calendarMonth[(l-1)*7+n-1].month==o.calendar.month&&a.calculateDate(l,n).getDay()===6?(c(),d("div",G,[(c(),d(g,null,D([10,14,16,20],i=>(c(),d(g,{key:a.calculateDate(l,n).setHours(i,0,0,0)},[a.bookedTime.indexOf(a.calculateDate(l,n).setHours(i,0,0,0))==-1?(c(),d("span",K,[e("input",{type:"radio",class:"btn-check",name:"options",id:a.calculateDate(l,n).setHours(i,0,0,0),value:a.calculateDate(l,n).setHours(i,0,0,0),onClick:y=>a.selectSession(a.calculateDate(l,n).setHours(i,0,0,0))},null,8,Q),e("label",{class:"btn btn-sm btn-outline-primary session-btn me-1",for:a.calculateDate(l,n).setHours(i,0,0,0)},u(i)+":00",9,X)])):k("",!0)],64))),64))])):a.calculateDate(l,n)>Date.now()&&a.calculateDate(l,n)<Date.now()+864e5*60&&a.calendarMonth[(l-1)*7+n-1].month==o.calendar.month&&(a.calculateDate(l,n).getDay()===1||a.calculateDate(l,n).getDay()===2||a.calculateDate(l,n).getDay()===4||a.calculateDate(l,n).getDay()===5)?(c(),d("div",Z,[a.bookedTime.indexOf(a.calculateDate(l,n).setHours(20,0,0,0))==-1?(c(),d("span",j,[e("input",{type:"radio",class:"btn-check",name:"options",id:a.calculateDate(l,n).setHours(20,0,0,0),value:a.calculateDate(l,n).setHours(20,0,0,0),onClick:i=>a.selectSession(a.calculateDate(l,n).setHours(20,0,0,0))},null,8,ee),e("label",{class:"btn btn-sm btn-outline-primary session-btn",for:a.calculateDate(l,n).setHours(20,0,0,0)},"20:00",8,te)])):k("",!0)])):k("",!0)],10,$)),64))])),64))])}const ae=L(R,[["render",se]]);const{VITE_URL:x,VITE_PATH:w}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},le={data(){return{isLoading:!1,banner_bg:P,order_bg:C,service:{},tempOrder:{user:{name:"",email:"",tel:"",address:""},message:""},selectedTime:""}},components:{LoaderComponent:H,CalendarComponent:ae},methods:{getService(){const{id:s}=this.$route.params;this.$http.get(`${x}/api/${w}/product/${s}`).then(t=>{this.service=t.data.product}).catch(t=>{console.log(t)})},selectSession(s){this.tempOrder.user.address=s;const t=new Intl.DateTimeFormat("zh-TW",{dateStyle:"full",timeStyle:"short",hour12:!1});this.selectedTime=s?t.format(parseInt(s)):""},addToCart(s,{resetForm:t}){let f={product_id:this.$route.params.id,qty:1};this.$http.post(`${x}/api/${w}/cart`,{data:f}).then(()=>{this.addOrder(t)}).catch(o=>{console.log(o)})},addOrder(s){const t=this.tempOrder,r=document.querySelector('input[name="options"]:checked').value;this.tempOrder.user.address=r;const f=new Intl.DateTimeFormat("zh-TW",{dateStyle:"full",timeStyle:"short",hour12:!1});this.$http.post(`${x}/api/${w}/order`,{data:t}).then(()=>{this.$swal.fire({icon:"success",title:"已完成預約",html:`
          ${f.format(parseInt(this.tempOrder.user.address))}  <br />
          ${this.service.title}
          `,footer:"到時見囉！"}).then(()=>{s(),this.$router.push("/services")})}).catch(o=>{console.log(o)})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的手機號碼"},closeLoader(){this.isLoading=!1}},mounted(){this.isLoading=!0,this.getService(),this.service.origin_price||setTimeout(()=>{this.isLoading=!1},1e3)}},ne={class:"healing_Theta"},oe=e("br",null,null,-1),re={class:"fs-3 fw-normal"},ie={class:"healing_content bg-beige px-3"},ce={class:"container pt-5 pb-5 position-relative"},de=["innerHTML"],he={class:"py-5"},ue=e("h2",{class:"text-center text-white mb-4"},[e("img",{src:O,alt:"預約療癒"}),_(" 預約療癒 ")],-1),me={key:0,class:"container px-3"},_e={class:"mb-3"},pe=e("label",{for:"inputTime",class:"form-label text-white"},"選擇療癒時間",-1),fe={class:"mb-3"},ye=e("label",{for:"sessionTime",class:"form-label text-white"},[_("時段"),e("span",null,"*")],-1),be={class:"col-md-6 mb-3"},ge=e("label",{for:"inputName",class:"form-label text-white"},[_("姓名"),e("span",null,"*")],-1),ve={class:"col-md-6 mb-3"},De=e("label",{for:"inputTel",class:"form-label text-white"},[_("手機號碼"),e("span",null,"*")],-1),ke={class:"mb-3"},xe=e("label",{for:"email",class:"form-label text-white"},[_("email"),e("span",null,"*")],-1),we={class:"mb-3"},Te=e("label",{for:"formNote",class:"form-label text-white"},"備註 (Line ID、帳號末5碼)",-1),Ve={id:"formNoteHelp",class:"form-text text-light"},Se={class:"fw-bold"},Le=e("div",null,[_(" 匯款資訊：台新銀行 812 敦南分行 "),e("br"),_(" 帳號：28881004008118 "),e("br"),_(" 戶名：沈家舟")],-1),Me=e("div",{class:""},[e("button",{type:"submit",class:"btn btn-beige text-primary w-100"},"送出")],-1),Ce={key:1,class:"d-flex justify-content-center"},Oe=N('<div class="d-inline-block p-3" style="background-color:#fffA;"><p>請聯繫舟舟報名</p><ul class="list-unstyled"><li class="mb-2 d-flex justify-content-between"><span class="me-4">Facebook: </span><a href="https://www.facebook.com/healingchou" target="_blank" class="text-decoration-underline">healingchou</a></li><li class="mb-2 d-flex justify-content-between"><span>Instagram:</span><a href="https://www.instagram.com/chouhealer/" target="_blank" class="text-decoration-underline">chouhealer</a></li><li class="mb-2 d-flex justify-content-between"><span>Line: </span><a href="https://line.me/R/ti/p/%40655bistu" target="_blank" class="text-decoration-underline">@655bistu</a></li></ul></div>',1),He=[Oe];function Ee(s,t,r,f,o,a){const l=b("LoaderComponent"),n=b("CalendarComponent"),i=b("v-field"),y=b("error-message"),M=b("v-form");return c(),d(g,null,[h(l,{class:p([{"d-none":!o.isLoading},"loader"])},null,8,["class"]),e("div",ne,[e("h1",{class:"text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image text-white",style:T([{backgroundImage:`url(${o.banner_bg})`},{"background-position":"center 70%"}])},[_(" 療癒服務 "),oe,e("span",re,u(o.service.title),1)],4),e("section",ie,[e("div",ce,[e("h2",null,u(o.service.title),1),e("div",{innerHTML:o.service.content},null,8,de),e("div",null,"收費："+u(s.$filters.currency(o.service.price))+" / "+u(o.service.unit),1)])]),e("section",{class:"healing_reserve bg-image",style:T({backgroundImage:`url(${o.order_bg})`})},[e("div",he,[ue,o.service.origin_price?(c(),d("div",me,[h(M,{ref:"form",class:"row service-form",onSubmit:a.addToCart},{default:E(({errors:v})=>[e("div",_e,[pe,h(n,{onSelectSession:a.selectSession,onCloseLoader:a.closeLoader},null,8,["onSelectSession","onCloseLoader"])]),e("div",fe,[ye,h(i,{id:"sessionTime",name:"時段",type:"text",class:p(["form-control",{"is-invalid":v.時段}]),placeholder:"請在上方月曆點選時段",rules:"required",modelValue:this.selectedTime,"onUpdate:modelValue":t[0]||(t[0]=m=>this.selectedTime=m),readonly:!0},null,8,["class","modelValue"]),h(y,{name:"時段",class:"invalid-feedback"})]),e("div",be,[ge,h(i,{id:"inputName",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":v.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:this.tempOrder.user.name,"onUpdate:modelValue":t[1]||(t[1]=m=>this.tempOrder.user.name=m)},null,8,["class","modelValue"]),h(y,{name:"姓名",class:"invalid-feedback"})]),e("div",ve,[De,h(i,{id:"inputTel",name:"電話",type:"tel",class:p(["form-control",{"is-invalid":v.電話}]),placeholder:"請輸入電話",rules:a.isPhone,modelValue:this.tempOrder.user.tel,"onUpdate:modelValue":t[2]||(t[2]=m=>this.tempOrder.user.tel=m)},null,8,["class","rules","modelValue"]),h(y,{name:"電話",class:"invalid-feedback"})]),e("div",ke,[xe,h(i,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":v.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:this.tempOrder.user.email,"onUpdate:modelValue":t[3]||(t[3]=m=>this.tempOrder.user.email=m)},null,8,["class","modelValue"]),h(y,{name:"email",class:"invalid-feedback"})]),e("div",we,[Te,I(e("textarea",{class:"form-control",id:"formNote",rows:"3",required:"","onUpdate:modelValue":t[4]||(t[4]=m=>this.tempOrder.message=m)},null,512),[[F,this.tempOrder.message]]),e("div",Ve,[e("div",Se,"收費： "+u(o.service.price)+" 元 / "+u(o.service.unit),1),Le])]),Me]),_:1},8,["onSubmit"])])):(c(),d("div",Ce,He))])],4)])],64)}const Pe=L(le,[["render",Ee]]);export{Pe as default};
