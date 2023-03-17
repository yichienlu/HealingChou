import { createApp } from 'vue' // 來自套件
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue' // 來自src資料夾
import router from './router'

// import Swal from 'sweetalert2'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: '#595043',
  cancelButtonColor: '#817366',
};

import './assets/style/all.scss'
import 'bootstrap'
// import 'bootstrap/dist/js/bootstrap'
import { date, currency } from './methods/filters';

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency,
};

// app.component() //作為元件
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

 // 作為插件
app.use(VueSweetalert2, options);
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
