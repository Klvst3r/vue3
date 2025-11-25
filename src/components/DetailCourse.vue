<script setup>
const { course, prueba } = defineProps({
  course: Object,
  //prueba: [String, Number],
  prueba: {
    type: Number,
    //required: 0,
    default: 0,
  },
  disabled: Boolean,
})

//console.log(course)
//prueba = 'Hola mundo desde el componente hijo'
</script>

<template>
  <h1>{{ course.title }} ({{ prueba }})</h1>
  <p>
    {{ course.professor }}
  </p>
  <p>{{ course.price }}</p>

  <button :disabled="disabled">Haz click</button>
</template>

<style scoped></style>
