import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "./assets/style/color/index.scss"
import "./assets/style/indent/index.scss"
import "./assets/style/line-height/index.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
