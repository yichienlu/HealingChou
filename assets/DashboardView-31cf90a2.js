import{_ as d,a as h,r as a,o as _,c as p,b as i,g as e,d as o,e as n,w as m,j as f}from"./index-fab60902.js";const{VITE_URL:k}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g={data(){return{isLogin:!1}},components:{RouterView:h},methods:{logout(){document.cookie='hexToken=""',this.isLogin=!1,alert("已登出"),this.$router.push("/")},checkAdmin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r,this.$http.post(`${k}/api/user/check`).then(()=>{this.isLogin=!0}).catch(t=>{console.log(t),this.$router.push("/login")})}},mounted(){this.checkAdmin()}},$={key:0,class:"position-relative"},v={class:"container"},V=i("br",null,null,-1);function x(r,t,w,E,c,u){const s=a("router-link"),l=a("router-view");return c.isLogin?(_(),p("div",$,[i("div",v,[e(" 管理頁面 "),V,o(s,{to:"/admin/orders"},{default:n(()=>[e("預約管理")]),_:1}),e(" | "),o(s,{to:"/admin/courses"},{default:n(()=>[e("服務/課程管理")]),_:1}),e(" | "),o(s,{to:"/admin/blog"},{default:n(()=>[e("部落格管理")]),_:1}),e(" | "),o(s,{to:"/"},{default:n(()=>[e("回前台")]),_:1}),e(" | "),i("a",{href:"#",onClick:t[0]||(t[0]=m(L=>u.logout(),["prevent"]))},"登出")]),o(l)])):f("",!0)}const R=d(g,[["render",x]]);export{R as default};
