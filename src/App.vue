<script setup>
import { ref } from 'vue'

const texto = ref();

</script>

<template>

  <input type="text" v-model.trim="texto">
  <button @click="console.log(texto)">
    Enviar
  </button>


</template>

<style scoped></style>
