// Importar estilos deginidos
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//Importacion de la tercera forma
//import MyComponent from './components/MyComponent.vue'

//Primera forma de registrar comonentes

// createApp(App).mount('#app')

// 1. Creamos la instancia de la aplicación Vue
// const app = createApp(App)

// 2. Montamos la aplicación en el elemento con id="app" de tu index.html
// app.mount('#app')

//Tercera forma de registrar componnetes, incorporamos el coponente en la variable

//Este segundo hace referencia de ocmo lo estoy recibiendo
//createApp(App).component('MyComponent', MyComponent).mount('#app')

//Registro Local
createApp(App).mount('#app')
