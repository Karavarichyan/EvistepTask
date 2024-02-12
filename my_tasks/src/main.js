
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import OtpView from './OtpView.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.component('OtpView', OtpView);
app.mount('#app')
