<script setup>

  import { ref } from 'vue';

  const mostrar = ref(true);
  
</script>

<template>
  <button @click="mostrar = !mostrar">Mostrar / Ocultar</button>

  <div v-show="mostrar">
    <h1>Hola mundo</h1>
    <p>Parrafo 1</p>
    <p>Parrafo 2</p>
  </div>
</template>

 
<style scoped>
  
</style>
  