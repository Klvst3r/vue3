<script setup>

  import { ref } from 'vue';

  const mostrar = ref(true);
  
</script>

<template>
  <button @click="mostrar = !mostrar">Mostrar / Ocultar</button>
  <h1 v-if="mostrar">Hola mundo</h1>
  <p v-if="mostrar">Parrafo 1</p>
  <p v-if="mostrar">Parrafo 2</p>
</template>
 
<style scoped>
  
</style>
 