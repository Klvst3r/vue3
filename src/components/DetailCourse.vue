<script setup>
const props = defineProps({
  course: Object,

  count: {
    type: Number,
    default: 0,
  },
})

//console.log(course)
//prueba = 'Hola mundo desde el componente hijo'
</script>

<template>
  <h1>{{ course.title }} ({{ count }})</h1>
  <p>
    {{ course.professor }}
  </p>
  <p>{{ course.price }}</p>

  <button @click="$emit('decrementCount', 2)">Haz click</button>
</template>

<style scoped></style>
