<script setup>
import { ref, provide } from 'vue'
import TwoComponent from '@/components/TwoComponent.vue'

const nombre = ref('Klvst3r')

provide('nombre', nombre)
</script>

<template>
  <div class="bg-red-500 p-8">
    <p class="text-2xl">Hola desde el componente 1</p>

    <input type="text" v-model="nombre" />

    <TwoComponent />
  </div>
</template>

<style scoped></style>
