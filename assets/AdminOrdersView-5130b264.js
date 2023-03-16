import{_ as H,o as l,c as r,d as a,t as h,F as m,h as y,j as u,B as O,D as w,i as p,v as k,E as C,k as M,g as T,w as _}from"./index-56106315.js";const{VITE_URL:b,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{months:["January","February","March","April","May","June","July","August","September","October","November","December"],orders:[],tempOrder:{id:"",name:"",phone:"",email:"",message:"",time:0,is_paid:!1,product:{title:"",category:"",id:""}},today:{year:0,month:0,date:0,day:0},calendar:{year:0,month:0,date:0,day:0},courses:[],services:[],closed:[],total_pages:0}},components:{},methods:{getBooked(){this.$http.get(`${b}/api/${g}/admin/orders`).then(d=>{this.total_pages=d.data.pagination.total_pages,this.processBooked()}).catch(d=>{console.log(d)})},async processBooked(){for(let d=1;d<=this.total_pages;d++)await this.getBookedPages(d);this.orders=this.orders.sort((d,t)=>d.user.address-t.user.address)},async getBookedPages(d){return new Promise(t=>{this.$http.get(`${b}/api/${g}/admin/orders?page=${d}`).then(c=>{d==1?this.orders=c.data.orders:this.orders=this.orders.concat(c.data.orders),t()}).catch(c=>{console.log(c)})})},selectTempOrder(d,t){console.log(t);let c;switch(new Date(d).getDay()){case 1:c="(一)";break;case 2:c="(二)";break;case 4:c="(四)";break;case 5:c="(五)";break;case 6:c="(六)";break}let D=new Date(d).toLocaleDateString()+c+" "+new Date(d).toLocaleTimeString("en-GB");this.tempOrder={...t,shownTime:D}},setToday(){const d=new Date;this.today.year=this.calendar.year=d.getFullYear(),this.today.month=this.calendar.month=d.getMonth(),this.today.date=this.calendar.date=d.getDate(),this.today.day=this.calendar.day=d.getDay()},adjustYear(d){this.calendar.year+=d},adjustMonth(d){let t=this.calendar.month+d;t>11?(this.adjustYear(1),this.calendar.month=0):t<0?(this.adjustYear(-1),this.calendar.month=11):this.calendar.month=t},calculateDate(d,t){return new Date(this.calendarMonth[(d-1)*7+t-1].year,this.calendarMonth[(d-1)*7+t-1].month,this.calendarMonth[(d-1)*7+t-1].date)},getProducts(){this.$http.get(`${b}/api/${g}/products/all`).then(d=>{d.data.products.forEach(t=>{t.category=="course"?this.courses.push({title:t.title,id:t.id}):t.category=="service"?this.services.push({title:t.title,id:t.id}):this.closed.push({title:t.title,id:t.id})})}).catch(d=>{console.log(d)})},addToCart(){const d={product_id:this.tempOrder.product.id,qty:1};this.$http.post(`${b}/api/${g}/cart`,{data:d}).then(t=>{this.addOrder()}).catch(t=>{console.log(t)})},addOrder(){const d={user:{name:this.tempOrder.name,email:this.tempOrder.email,tel:this.tempOrder.phone,address:this.tempOrder.time.toString()},message:this.tempOrder.message};this.$http.post(`${b}/api/${g}/order`,{data:d}).then(t=>{alert("已成功預約"),this.getBooked()}).catch(t=>{console.log(t)})},editOrder(){},deleteOrder(d){window.confirm("確定要刪除?")&&this.$http.delete(`${b}/api/${g}/admin/order/${d}`).then(t=>{alert("預約已刪除"),this.getBooked()}).catch(t=>{console.log(t)})}},computed:{calendarFirstDay(){const d=new Date(this.calendar.year,this.calendar.month,1),t=new Date(this.calendar.year,this.calendar.month,1-d.getDay());return{year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),day:t.getDay()}},calendarMonth(){const d=[];let t;for(let c=0;c<42;c++)t=new Date(this.calendarFirstDay.year,this.calendarFirstDay.month,this.calendarFirstDay.date+c),d.push({year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),day:t.getDay()});return d},formatOrder(){const d={};for(const t of this.orders){const c=Object.keys(t.products)[0],D=t.products[c].product,n=new Date(Number(t.user.address)).setHours(0,0,0,0);d[n]||(d[n]=[]),d[n].push({id:t.id,product:D,user:t.user,message:t.message,time:t.user.address,shownTime:new Date(Number(t.user.address)).getHours(),is_paid:t.is_paid})}return d},bookedTime(){const d=[];for(const t of this.orders)d.push(t.user.address*1);return d}},mounted(){this.setToday(),this.getBooked(),this.getProducts()}},R={class:"container"},U={class:"calendar text-center"},B={class:"month"},E=a("i",{class:"fas fa-angle-left"},null,-1),P=[E],F={class:"date"},L=a("i",{class:"fas fa-angle-right"},null,-1),S=[L],N=a("div",{class:"weekDay d-flex"},[a("div",null,"日"),a("div",null,"一"),a("div",null,"二"),a("div",null,"三"),a("div",null,"四"),a("div",null,"五"),a("div",null,"六")],-1),A=["data-date","data-timestamp"],I={class:"d-sm-none"},Y={key:0},J=["data-session","onClick"],q=["data-session","onClick"],z=["data-session","onClick"],G=["data-session","onClick"],K={key:1},Q=["data-session","onClick"],W=["onClick"],X={class:"d-none d-md-inline"},Z={class:"d-none d-sm-inline"},$={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},j={class:"modal-dialog"},ee={class:"modal-content"},te={class:"modal-header"},ae={key:0,class:"modal-title fs-5",id:"orderModalLabel"},se={key:1,class:"modal-title fs-5",id:"orderModalLabel"},de=a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),oe={class:"modal-body"},le={class:"mb-3 row"},re=a("label",{for:"",class:"col-sm-2 col-form-label"},"類別",-1),ce={class:"col-sm-10"},ne={class:"form-check form-check-inline"},ie=a("label",{class:"form-check-label",for:"flexRadio1"},"關閉時段",-1),ue={class:"form-check form-check-inline"},he=a("label",{class:"form-check-label",for:"flexRadio2"},"服務",-1),me={class:"form-check form-check-inline"},pe=a("label",{class:"form-check-label",for:"flexRadio3"},"課程",-1),ye={class:"mb-3 row"},_e=a("label",{for:"",class:"col-sm-2 col-form-label"},null,-1),be={class:"col-sm-10"},ge=["value","selected"],fe=["value","selected"],ve=["value","selected"],ke={class:"mb-3 row"},De=a("label",{for:"orderTime",class:"col-sm-2 col-form-label"},"時段",-1),Oe={class:"col-sm-10"},we={class:"mb-3 row"},Me=a("label",{for:"userName",class:"col-sm-2 col-form-label"},"名字",-1),Te={class:"col-sm-10"},xe={class:"mb-3 row"},He=a("label",{for:"userPhone",class:"col-sm-2 col-form-label"},"電話",-1),Ce={class:"col-sm-10"},Ve={class:"mb-3 row"},Re=a("label",{for:"userEmail",class:"col-sm-2 col-form-label"},"Email",-1),Ue={class:"col-sm-10"},Be={class:"mb-3 row"},Ee=a("label",{for:"message",class:"col-sm-2 col-form-label"},"備註",-1),Pe={class:"col-sm-10"},Fe={class:"mb-3 row"},Le={class:"form-check col-12"},Se=a("label",{class:"form-check-label",for:"isPaid"}," 確認付款 ",-1),Ne={class:"modal-footer"};function Ae(d,t,c,D,n,s){return l(),r(m,null,[a("div",R,[a("div",U,[a("div",B,[a("button",{class:"btn btn-outline-primary prev",onClick:t[0]||(t[0]=e=>s.adjustMonth(-1))},P),a("div",F,[a("h1",null,h(n.calendar.year),1),a("h2",null,h(n.months[n.calendar.month]),1)]),a("div",{class:"btn btn-outline-primary next",onClick:t[1]||(t[1]=e=>s.adjustMonth(1))},S)]),N,(l(),r(m,null,y(6,e=>a("div",{class:"week d-flex",key:"aaa"+e},[(l(),r(m,null,y(7,o=>a("div",{class:M(["day text-start ps-1",{other:s.calendarMonth[(e-1)*7+o-1].month!==n.calendar.month,saturday:s.calendarMonth[(e-1)*7+o-1].day==6,sunday:s.calendarMonth[(e-1)*7+o-1].day==0,today:s.calendarMonth[(e-1)*7+o-1].year===n.today.year&&s.calendarMonth[(e-1)*7+o-1].month===n.today.month&&s.calendarMonth[(e-1)*7+o-1].date===n.today.date}]),key:"aaa"+o,"data-date":s.calendarMonth[(e-1)*7+o-1].date,"data-timestamp":this.calculateDate(e,o).valueOf()},[a("p",null,[T(h(s.calendarMonth[(e-1)*7+o-1].date)+" ",1),a("span",I,h(s.calendarMonth[(e-1)*7+o-1].day==0?"(日)":s.calendarMonth[(e-1)*7+o-1].day==1?"(一)":s.calendarMonth[(e-1)*7+o-1].day==2?"(二)":s.calendarMonth[(e-1)*7+o-1].day==3?"(三)":s.calendarMonth[(e-1)*7+o-1].day==4?"(四)":s.calendarMonth[(e-1)*7+o-1].day==5?"(五)":"(六)"),1)]),s.calendarMonth[(e-1)*7+o-1].month==n.calendar.month&&s.calculateDate(e,o).getDay()===6?(l(),r("div",Y,[s.calculateDate(e,o)>Date.now()&&s.bookedTime.indexOf(s.calculateDate(e,o).setHours(10,0,0,0))==-1?(l(),r("button",{key:0,type:"button","data-session":s.calculateDate(e,o).setHours(10,0,0,0),class:"btn btn-sm btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:_(f=>this.selectTempOrder(s.calculateDate(e,o).setHours(10,0,0,0),{product:{category:"closed",title:"closed"},time:s.calculateDate(e,o).setHours(10,0,0,0)}),["prevent"])}," 10:00 ",8,J)):p("",!0),s.calculateDate(e,o)>Date.now()&&s.bookedTime.indexOf(s.calculateDate(e,o).setHours(14,0,0,0))==-1?(l(),r("button",{key:1,type:"button","data-session":s.calculateDate(e,o).setHours(14,0,0,0),class:"btn btn-sm btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:_(f=>this.selectTempOrder(s.calculateDate(e,o).setHours(14,0,0,0),{product:{category:"closed",title:"closed"},time:s.calculateDate(e,o).setHours(14,0,0,0)}),["prevent"])}," 14:00 ",8,q)):p("",!0),s.calculateDate(e,o)>Date.now()&&s.bookedTime.indexOf(s.calculateDate(e,o).setHours(16,0,0,0))==-1?(l(),r("button",{key:2,type:"button","data-session":s.calculateDate(e,o).setHours(16,0,0,0),class:"btn btn-sm btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:_(f=>this.selectTempOrder(s.calculateDate(e,o).setHours(16,0,0,0),{product:{category:"closed",title:"closed"},time:s.calculateDate(e,o).setHours(16,0,0,0)}),["prevent"])}," 16:00 ",8,z)):p("",!0),s.calculateDate(e,o)>Date.now()&&s.bookedTime.indexOf(s.calculateDate(e,o).setHours(20,0,0,0))==-1?(l(),r("button",{key:3,type:"button","data-session":s.calculateDate(e,o).setHours(20,0,0,0),class:"btn btn-sm btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:_(f=>this.selectTempOrder(s.calculateDate(e,o).setHours(20,0,0,0),{product:{category:"closed",title:"closed"},time:s.calculateDate(e,o).setHours(20,0,0,0)}),["prevent"])}," 20:00 ",8,G)):p("",!0)])):s.calendarMonth[(e-1)*7+o-1].month==n.calendar.month&&(s.calculateDate(e,o).getDay()===1||s.calculateDate(e,o).getDay()===2||s.calculateDate(e,o).getDay()===4||s.calculateDate(e,o).getDay()===5)?(l(),r("div",K,[s.calculateDate(e,o)>Date.now()&&s.bookedTime.indexOf(s.calculateDate(e,o).setHours(20,0,0,0))==-1?(l(),r("button",{key:0,type:"button",class:"btn btn-sm btn-outline-primary","data-session":s.calculateDate(e,o).setHours(20,0,0,0),"data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:_(f=>this.selectTempOrder(s.calculateDate(e,o).setHours(20,0,0,0),{product:{category:"closed",title:"closed"},time:s.calculateDate(e,o).setHours(20,0,0,0)}),["prevent"])}," 20:00 ",8,Q)):p("",!0)])):p("",!0),(l(!0),r(m,null,y(s.formatOrder,(f,v)=>(l(),r(m,{key:v},[(l(!0),r(m,null,y(s.formatOrder[v],(i,x)=>(l(),r(m,{key:"serve"+x},[v==s.calculateDate(e,o).valueOf()?(l(),r("a",{key:0,href:"#",class:M(["booked d-block",[i.user.name=="closed"&&s.calculateDate(e,o)>Date.now()?"text-muted text-decoration-none":"",s.calculateDate(e,o)>Date.now()?"":"text-danger"]]),"data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:_(Ie=>this.selectTempOrder(new Date(parseInt(v)).setHours(i.shownTime,0,0,0),{shownTime:new Date(parseInt(v)).setHours(i.shownTime,0,0,0),time:i.user.address,id:i.id,name:i.user.name,phone:i.user.tel,email:i.user.email,message:i.message,is_paid:i.is_paid,product:{category:i.product.category,title:i.product.title,id:i.product.id}}),["prevent"])},[T(h(i.shownTime+":00")+" ",1),a("span",X,h(i.user.name),1),a("span",Z,h(i.product.title),1)],10,W)):p("",!0)],64))),128))],64))),128))],10,A)),64))])),64))])]),a("div",$,[a("div",j,[a("div",ee,[a("div",te,[this.tempOrder.id?(l(),r("h1",ae,"修改預約")):(l(),r("h1",se,"新增預約/關閉時段")),de]),a("div",oe,[a("div",le,[re,a("div",ce,[a("div",ne,[u(a("input",{class:"form-check-input",type:"radio",name:"flexRadio",id:"flexRadio1",value:"closed","onUpdate:modelValue":t[2]||(t[2]=e=>this.tempOrder.product.category=e)},null,512),[[O,this.tempOrder.product.category]]),ie]),a("div",ue,[u(a("input",{class:"form-check-input",type:"radio",name:"flexRadio",id:"flexRadio2",value:"service","onUpdate:modelValue":t[3]||(t[3]=e=>this.tempOrder.product.category=e)},null,512),[[O,this.tempOrder.product.category]]),he]),a("div",me,[u(a("input",{class:"form-check-input",type:"radio",name:"flexRadio",id:"flexRadio3",value:"course","onUpdate:modelValue":t[4]||(t[4]=e=>this.tempOrder.product.category=e)},null,512),[[O,this.tempOrder.product.category]]),pe])])]),a("div",ye,[_e,a("div",be,[this.tempOrder.product.category=="closed"?u((l(),r("select",{key:0,class:"form-select","onUpdate:modelValue":t[5]||(t[5]=e=>this.tempOrder.product.id=e)},[a("option",{value:n.closed[0].id,selected:this.tempOrder.product.id==n.closed[0].id},"closed",8,ge)],512)),[[w,this.tempOrder.product.id]]):this.tempOrder.product.category=="service"?u((l(),r("select",{key:1,class:"form-select","onUpdate:modelValue":t[6]||(t[6]=e=>this.tempOrder.product.id=e)},[(l(!0),r(m,null,y(n.services,e=>(l(),r("option",{value:e.id,key:e.id,selected:this.tempOrder.product.id==e.id},h(e.title),9,fe))),128))],512)),[[w,this.tempOrder.product.id]]):this.tempOrder.product.category=="course"?u((l(),r("select",{key:2,class:"form-select","onUpdate:modelValue":t[7]||(t[7]=e=>this.tempOrder.product.id=e)},[(l(!0),r(m,null,y(n.courses,e=>(l(),r("option",{value:e.id,key:e.id,selected:this.tempOrder.product.id==e.id},h(e.title),9,ve))),128))],512)),[[w,this.tempOrder.product.id]]):p("",!0)])]),a("div",ke,[De,a("div",Oe,[u(a("input",{type:"text",class:"form-control-plaintext",readonly:"",id:"orderTime","onUpdate:modelValue":t[8]||(t[8]=e=>this.tempOrder.shownTime=e)},null,512),[[k,this.tempOrder.shownTime]])])]),a("div",we,[Me,a("div",Te,[u(a("input",{type:"text",class:"form-control",id:"userName","onUpdate:modelValue":t[9]||(t[9]=e=>this.tempOrder.name=e)},null,512),[[k,this.tempOrder.name]])])]),a("div",xe,[He,a("div",Ce,[u(a("input",{type:"tel",class:"form-control",id:"userPhone","onUpdate:modelValue":t[10]||(t[10]=e=>this.tempOrder.phone=e)},null,512),[[k,this.tempOrder.phone]])])]),a("div",Ve,[Re,a("div",Ue,[u(a("input",{type:"email",class:"form-control",id:"userEmail","onUpdate:modelValue":t[11]||(t[11]=e=>this.tempOrder.email=e)},null,512),[[k,this.tempOrder.email]])])]),a("div",Be,[Ee,a("div",Pe,[u(a("input",{type:"text",class:"form-control",id:"message","onUpdate:modelValue":t[12]||(t[12]=e=>this.tempOrder.message=e)},null,512),[[k,this.tempOrder.message]])])]),a("div",Fe,[a("div",Le,[u(a("input",{class:"form-check-input",type:"checkbox",value:"",id:"isPaid","onUpdate:modelValue":t[13]||(t[13]=e=>this.tempOrder.is_paid=e)},null,512),[[C,this.tempOrder.is_paid]]),Se])])]),a("div",Ne,[this.tempOrder.id?(l(),r("button",{key:0,type:"button",class:"btn btn-outline-danger me-auto","data-bs-dismiss":"modal",onClick:t[14]||(t[14]=e=>s.deleteOrder(this.tempOrder.id))},"刪除預約")):p("",!0),this.tempOrder.id?(l(),r("button",{key:1,type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[15]||(t[15]=(...e)=>this.editOrder&&this.editOrder(...e))},"儲存編輯")):(l(),r("button",{key:2,type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[16]||(t[16]=(...e)=>this.addToCart&&this.addToCart(...e))},"新增預約"))])])])])],64)}const Je=H(V,[["render",Ae]]);export{Je as default};
