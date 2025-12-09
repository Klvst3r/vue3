<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
})

const alertColor =
  {
    info: 'text-blue-800 bg-blue-50 border-blue-300',
    danger: 'text-red-800 bg-red-50 border-red-300',
    success: 'text-green-800 bg-green-50 border-green-300',
    warning: 'text-yellow-800 bg-yellow-50 border-yellow-300',
    dark: 'text-gray-800 bg-gray-50 border-gray-300',
  }[props.type] || 'text-blue-800 bg-blue-50 border-blue-300'
</script>

<template>
  <div
    :class="alertColor"
    v-bind="attrs"
    class="flex items-center p-4 mb-4 text-sm border rounded-lg"
    role="alert"
  >
    <span class="font-medium"> <slot name="title"> Info! - &nbsp;</slot></span>
    <slot> Contenido de respaldo </slot>
  </div>
</template>
