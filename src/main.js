import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
window.axios = axios



createApp(App).use(router).mount('#app')


// export default () => {
//     return axios.create({
//         baseURL: process.env.VUE_APP_API
//     })
// }