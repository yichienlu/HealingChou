import{_ as c,o as a,c as n,b as e,t as i,f as r}from"./index-0afbc78c.js";const{VITE_URL:l,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p={data(){return{course:{}}},methods:{getCourse(){const{id:s}=this.$route.params;this.$http.get(`${l}/api/${h}/product/${s}`).then(t=>{console.log(t.data.product),this.course=t.data.product}).catch(t=>{console.log(t)})}},mounted(){this.getCourse()}},u={class:"course_Theta position-relative"},_=e("h1",{class:"text-white text-center fs-1 pt-40 pt-lg-80 pb-40 pb-lg-80 lh-1 mb-0 bg-image",style:{"background-image":"url(@/assets/images/banner-tarot-05.jpg)"}},[r(" 療癒課程 "),e("br")],-1),d={class:"healing_content bg-beige"},g={class:"container py-40 py-lg-80 position-relative"},m=["innerHTML"],b=e("section",{class:"healing_reserve bg-image d-none",style:{"background-image":"url(src/assets/images/tarot-stack.jpg)"}},[e("div",{class:"container pt-5 pb-5"},[e("h2",{class:"text-center text-white mb-4"}," 報名課程 ")])],-1);function f(s,t,T,v,o,x){return a(),n("div",u,[_,e("section",d,[e("div",g,[e("h2",null,i(o.course.title),1),e("div",{innerHTML:o.course.content},null,8,m)])]),b])}const V=c(p,[["render",f]]);export{V as default};
