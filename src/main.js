import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import './scss/tailwind.scss'
import './listener.js'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')
