<script setup>

  import { ref } from 'vue';

  const type = ref('a');
  
</script>

<template>
  <button @click="type = 'a'">A</button>
  <button @click="type = 'b'">B</button>
  <button @click="type = 'c'">C</button>

  <p v-if="type === 'a'">A</p>
  <p v-else-if="type ==='b'">B</p>
  <p v-else-if="type === 'c'">C</p>
</template>
 
<style scoped>
  
</style>
 