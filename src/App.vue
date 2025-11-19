<script setup>
import { ref } from 'vue'

const numero = ref();

</script>

<template>

  <input type="text" v-model.number="numero">
  <button @click="console.log(numero + 5)">
    Enviar
  </button>


</template>

<style scoped></style>
