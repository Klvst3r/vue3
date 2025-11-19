<script setup>
    function enviar(){
      console.log ("Enviando formulario");
    }
    
</script>

<template>

  <form @submit.prevent="enviar" >
    <button>Enviar</button>
  </form>

</template>


<style scoped>

</style>
  