<script setup>
import { ref } from 'vue'

const paises = ref(["mexico"]);

</script>

<template>
  <div>
    <label>
      <input type="checkbox" value="mexico" v-model="paises">
      México
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" value="argentina" v-model="paises">
      Argentina
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" value="peru" v-model="paises">
      Perú
    </label>
  </div>

  {{ paises }}
  
</template>
 


 

<style scoped></style>
