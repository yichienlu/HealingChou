import{_ as d,o as u,c,b as s,i,v as l,j as m}from"./index-2fd8140e.js";const{VITE_URL:p}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/HealingChou/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${p}/admin/signin`,this.user).then(o=>{const{token:e,expired:n}=o.data;document.cookie=`hexToken=${e}; expired=${new Date(n)}`,alert(o.data.message),this.$router.push("/admin")}).catch(o=>{console.log(o)})}}},h={class:"container py-80"},_={class:"form-floating mb-3"},g=s("label",{for:"username"},"Email address",-1),w={class:"form-floating"},b=s("label",{for:"password"},"Password",-1),v=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function x(o,e,n,E,r,a){return u(),c("div",h,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=m((...t)=>a.login&&a.login(...t),["prevent"]))},[s("div",_,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>r.user.username=t)},null,512),[[l,r.user.username]]),g]),s("div",w,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>r.user.password=t)},null,512),[[l,r.user.password]]),b]),v],32)])}const T=d(f,[["render",x]]);export{T as default};