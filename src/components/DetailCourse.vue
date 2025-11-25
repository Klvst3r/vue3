<script setup>
const props = defineProps(['course'])

//console.log(props.course);
</script>

<template>
  <h1>
    {{ course.title }}
  </h1>
  <p>
    {{ course.professor }}
  </p>
  <p>{{ course.price }}</p>
</template>

<style scoped></style>
