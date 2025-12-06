<script setup>
const emit = defineEmits(['decrementCount'])

const props = defineProps({
  course: Object,

})

const count = defineModel('count', {
  type: Number,
  defautl: 0,
});


function buttonClick() {
  count.value--;
}

</script>

<template>
   <h1>{{ course.title }}</h1>
   <input type="text" v-model.number="count" />
  <p>
    {{ course.professor }}
  </p>
  <p>{{ course.price }}</p>

  <button @click="buttonClick">Haz click</button>
</template>

<style scoped></style>
