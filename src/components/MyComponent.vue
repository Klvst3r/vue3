<script setup>
import { ref } from 'vue'

const mensaje = ref('¡Hola desde mi primer componente reutilizable!')

const count = ref(0)
</script>

<template>
  <div class="my-component">
    <h2>{{ mensaje }}</h2>
    <p>Este componente vive en la carpeta "components".</p>
  </div>

  <h1>
    Hola desde el componente personalizado, este componente vive en la carpeta
    "components".
  </h1>

  <h1>Contador</h1>
  <button @click="count--">-</button>
  <span class="count">{{ count }}</span>
  <button @click="count++">+</button>
</template>

<style scoped>
.my-component {
  border: 1px solid #42b883;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}
h2 {
  color: #35495e;
}
.count {
  margin: 0 10px;
}
</style>
