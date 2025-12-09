<script setup>
import { ref } from 'vue'
import TwoComponent from '@/components/TwoComponent.vue'



const nombre = ref('Klvst3r');
//const nombre = ref('')
</script>

<template>
  <div class="bg-red-500 p-8">
    <p class="text-2xl">Hola desde el componente 1</p>
    
    
    <TwoComponent :nombre/>
  </div>
</template>

<style scoped></style>
