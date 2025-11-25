<script setup>
const { course, prueba } = defineProps(['course', 'prueba'])

console.log(course)
</script>

<template>
  <h1>{{ course.title }} ({{ prueba }})</h1>
  <p>
    {{ course.professor }}
  </p>
  <p>{{ course.price }}</p>
</template>

<style scoped></style>
