import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import axios from 'axios';
import VueAxios from 'vue-axios';

const pinia = createPinia()

import './scss/tailwind.scss'
import './listener.js'

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')