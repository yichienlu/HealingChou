import{_ as d,o as u,c,b as s,w as m,k as a,v as l}from"./index-64541ee2.js";const{VITE_URL:p}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${p}/admin/signin`,this.user).then(o=>{const{token:e,expired:r}=o.data;document.cookie=`hexToken=${e}; expired=${new Date(r)}`,alert(o.data.message),this.$router.push("/admin")}).catch(o=>{console.log(o)})}}},f={class:"container py-80"},h={class:"row justify-content-center"},w={class:"col-sm-8"},g={class:"form-floating mb-3"},v=s("label",{for:"username"},"Email address",-1),b={class:"form-floating"},x=s("label",{for:"password"},"Password",-1),E=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function V(o,e,r,k,n,i){return u(),c("div",f,[s("div",h,[s("div",w,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=m((...t)=>i.login&&i.login(...t),["prevent"]))},[s("div",g,[a(s("input",{type:"email",class:"form-control",id:"username",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>n.user.username=t)},null,512),[[l,n.user.username]]),v]),s("div",b,[a(s("input",{type:"password",class:"form-control",id:"password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>n.user.password=t)},null,512),[[l,n.user.password]]),x]),E],32)])])])}const T=d(_,[["render",V]]);export{T as default};
