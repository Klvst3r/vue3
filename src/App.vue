<script setup>
import AlertComponent from '@/components/AlertComponent.vue'
</script>

<template>
  <AlertComponent type="danger">
    <template #title> Alert Danger! - &nbsp; </template>
    Hola desde la alerta
  </AlertComponent>
</template>

<style scoped></style>
