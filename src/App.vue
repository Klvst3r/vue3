<script setup>

  import { ref } from 'vue';

  const awesome = ref(false);
  
</script>

<template>
  <p v-if="awesome">Vue es increible</p>

  <p v-else>Oh no, Vue es horrible</p>
</template>
 
<style scoped>
  
</style>
 