<script setup>
// 1. Importar el componente Detail course
import DetailCourse from './components/DetailCourse.vue'

let course = {
  title: 'Vue desde cero',
  professor: 'Klvst3r',
  price: 10,
}
</script>

<template>
  <DetailCourse course="Vue 3" />
</template>
<!-- h1 { color: #35495e; } -->
<style scoped></style>
