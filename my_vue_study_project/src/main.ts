import './assets/main.css'

// 引入createApp用于创建应用
import { createApp } from 'vue'
import router from './router'
// 引入App根组件
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
