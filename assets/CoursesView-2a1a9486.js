import{_ as d,R as u,r as h,o,c as n,d as e,n as i,F as _,h as p,i as m,e as g,f,t as l,g as c}from"./index-99e4f5c1.js";const b="/HealingChou/assets/banner-tarot-01-04778583.jpg",{VITE_URL:x,VITE_PATH:y}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},k={data(){return{banner_image:b,courses:[]}},components:{RouterLink:u},methods:{getCourses(){this.$http.get(`${x}/api/${y}/products?category=course`).then(s=>{console.log(s.data.products),this.courses=s.data.products}).catch(s=>{console.log(s)})}},mounted(){this.getCourses()}},v={class:"container py-40 py-lg-80"},V={key:0,class:"row"},L=e("div",{class:"position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"},null,-1),R={class:"text-center mb-0"},T={class:"material-symbols-outlined fs-48"},C=e("br",null,null,-1),E={class:"mb-0 p-4 pt-3 mt-auto flex healing-item-description"},H=["innerHTML"];function I(s,w,S,$,a,B){const r=h("RouterLink");return o(),n("div",null,[e("h2",{class:"text-center fs-1 py-40 py-lg-80 text-white bg-image",style:i({backgroundImage:"url("+a.banner_image+")"})},"療癒課程",4),e("section",v,[a.courses.length?(o(),n("div",V,[(o(!0),n(_,null,p(a.courses,t=>(o(),n("div",{class:"col-md-6 col-lg-4 col-xxl-3 mb-4",key:t.id},[g(r,{to:`/course/${t.id}`,class:"healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow",style:i({backgroundImage:"url("+t.imageUrl+")"})},{default:f(()=>[L,e("h2",R,[e("span",T,l(t.unit),1),c(),C,c(" "+l(t.title),1)]),e("div",E,[e("div",{innerHTML:t.description},null,8,H)])]),_:2},1032,["to","style"])]))),128))])):m("",!0)])])}const N=d(k,[["render",I]]);export{N as default};