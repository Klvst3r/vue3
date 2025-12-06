<script setup>
const emit = defineEmits(['decrementCount'])

const props = defineProps({
  course: Object,

})

const count = defineModel();


function buttonClick() {
  count.value--;
}

</script>

<template>
   <h1>{{ course.title }}</h1>
   <input type="text" v-model="count" />
  <p>
    {{ course.professor }}
  </p>
  <p>{{ course.price }}</p>

  <button @click="buttonClick">Haz click</button>
</template>

<style scoped></style>
