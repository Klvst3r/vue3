<script setup>
//1. Importamos ref
import { ref } from 'vue'

// 2. Importar el componente Detail course
import DetailCourse from './components/DetailCourse.vue'

let courses = [
  {
    title: 'Vue desde cero',
    professor: 'Klvst3r',
    price: 10,
  },
  {
    title: 'Angular desde cero',
    professor: 'Klvst3r',
    price: 15,
  },
  {
    title: 'React desde cero',
    professor: 'Klvst3r',
    price: 20,
  },
]

//Pasamos el atributo de manera dinamica:
const prueba = ref(5)
</script>

<template>
  <input type="text" v-model="prueba" />

  <DetailCourse v-for="course in courses" :course :prueba disabled />
</template>
<!-- h1 { color: #35495e; } -->
<style scoped></style>
