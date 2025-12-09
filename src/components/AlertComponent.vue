<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
})

const alertColor =
  {
    info: 'text-blue-800 bg-blue-50',
  }[props.type] || 'text-blue-800 bg-blue-50'
</script>

<template>
  <div
    :class="alertColor"
    v-bind="attrs"
    class="flex items-center p-4 mb-4 text-sm border border-blue-300 rounded-lg"
    role="alert"
  >
    <span class="font-medium">Info!</span>
    This is a default Tailwind/Flowbite alert.
  </div>
</template>
