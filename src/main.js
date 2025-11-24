// Importar estilos deginidos
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 1. Creamos la instancia de la aplicación Vue
const app = createApp(App)

// 2. Montamos la aplicación en el elemento con id="app" de tu index.html
app.mount('#app')
