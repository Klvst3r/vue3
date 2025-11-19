<script setup>
import { ref } from 'vue'

const name = ref('');

</script>

<template>
 <textarea v-model="name"></textarea>
 <p>{{ name }}</p>
</template>

<style scoped></style>
