<script setup>
const idDisabled = false; //Posible valores: true | false
</script>

<template>
  <p>
    {{ isDisabled ? "Deshablitado" : "Habilitado" }}
  </p>
  <button :disabled="idDisabled">Haz click</button>
</template>

<style scoped></style>
