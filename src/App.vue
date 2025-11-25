<script setup>
// 1. Importar el componente Detail course
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
</script>

<template>
  <DetailCourse v-for="course in courses" :course="course" />
</template>
<!-- h1 { color: #35495e; } -->
<style scoped></style>
