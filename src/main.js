import { createApp } from 'vue' // 來自套件
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue' // 來自src資料夾
import router from './router'

import './assets/style/all.scss'
import 'bootstrap'
// import 'bootstrap/dist/js/bootstrap'
import { date, currency } from './methods/filters';


const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency,
};
// app.component() //作為元件
app.use(createPinia()) // 作為插件
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
