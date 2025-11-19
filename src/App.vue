<script setup>
import { ref } from 'vue'

const numero = ref(1);

</script>

<template>
  <div>
    <label>
      <input v-model="numero" type="radio" value="1">
      Uno
    </label>
  </div>
  <div>
    <label>
      <input v-model="numero" type="radio" value="2">
      Dos
    </label>
  </div>
  <div>
    <label>
      <input v-model="numero" type="radio" value="3">
      Tres
    </label>
  </div>

  {{ numero }}
</template>
 

<style scoped></style>
