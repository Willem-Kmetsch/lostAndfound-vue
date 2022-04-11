import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'

import axios from 'axios'
import './axios'
import Moment from 'moment'


const app = createApp(App)
app.config.globalProperties.$http = axios
installElementPlus(app)
app
    .use(store)
    .use(router)
    .mount('#app')

// app .filter('formatDate', function(value) {
//     return Moment(value).format('YYYY-MM-DD HH:mm:ss')
// })


