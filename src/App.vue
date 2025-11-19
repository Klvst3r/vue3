<script setup>
import { ref } from 'vue'

const numero = ref(1);

//Definimos el valor en una cadena vacia

const pais = ref('');

</script>

<template>
<select v-model="pais">
  <option value="">Seleccione un pais</option>
  <option value="mexico">México</option>
  <option value="brazil">brazil</option>
  <option value="colombia">Colombia</option>
  </select>

  <p>
    {{ pais }}
  </p>

</template>


 

<style scoped></style>
