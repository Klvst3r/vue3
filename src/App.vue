<script setup>
    import { ref } from 'vue';
    

</script>

<template>

  <div @click="console.log('Hiciste click en el div')">

    <p>Hola Mundo</p>
    <button @click.stop="console.log('Hiciste click en el boton')">
      Haz click
    </button>
  </div>

</template>


<style scoped>

</style>
  