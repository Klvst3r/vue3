<script setup>
//const props = defineProps(['class'])
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div>
    <div v-bind="$attrs">Hola mundo mundial</div>
  </div>
</template>

<style scoped></style>
