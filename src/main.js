// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// import './assets/main.css'
//import pinia
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CanvasJSChart from '@canvasjs/vue-charts';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { Bar } from 'vue-chartjs'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(CanvasJSChart)
app.use(router)
app.use(pinia)
// app.use(Bar)

app.mount('#app')
