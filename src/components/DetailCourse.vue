<script setup>
const props = defineProps(['course'])

 console.log(props.course);
</script>

<template>
  <h1>
    {{ course }}
  </h1>
</template>

<style scoped></style>
