import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initAnalytics } from './lib/analytics'

const app = createApp(App)
app.use(router)
initAnalytics(router)
app.mount('#app')
