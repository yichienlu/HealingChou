import{_ as d,R as u,r as h,o,c as n,b as e,n as l,F as _,g as p,h as m,d as g,w as f,t as i,f as c}from"./index-2fd8140e.js";const{VITE_URL:x,VITE_PATH:y}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},b={data(){return{courses:[]}},components:{RouterLink:u},methods:{getCourses(){this.$http.get(`${x}/api/${y}/products?category=course`).then(t=>{console.log(t.data.products),this.courses=t.data.products}).catch(t=>{console.log(t)})}},mounted(){this.getCourses()}},k={class:"container py-40 py-lg-80"},v={key:0,class:"row"},V=e("div",{class:"position-absolute top-0 bottom-0 start-0 end-0 healing-item-screen"},null,-1),L={class:"text-center mb-0"},R={class:"material-symbols-outlined fs-48"},T=e("br",null,null,-1),E={class:"mb-0 p-4 pt-3 mt-auto flex healing-item-description"},C=["innerHTML"];function $(t,w,I,H,a,S){const r=h("RouterLink");return o(),n("div",null,[e("h2",{class:"text-center fs-1 py-40 py-lg-80 text-white bg-image",style:l({backgroundImage:`url(${t.imagePath})`})},"療癒課程",4),e("section",k,[a.courses.length?(o(),n("div",v,[(o(!0),n(_,null,p(a.courses,s=>(o(),n("div",{class:"col-md-6 col-lg-4 col-xxl-3 mb-4",key:s.id},[g(r,{to:`/course/${s.id}`,class:"healing-item healing-item-theta d-block h-100 position-relative rounded-12 d-flex flex-column shadow",style:l({backgroundImage:"url("+s.imageUrl+")"})},{default:f(()=>[V,e("h2",L,[e("span",R,i(s.unit),1),c(),T,c(" "+i(s.title),1)]),e("div",E,[e("div",{innerHTML:s.description},null,8,C)])]),_:2},1032,["to","style"])]))),128))])):m("",!0)])])}const D=d(b,[["render",$]]);export{D as default};