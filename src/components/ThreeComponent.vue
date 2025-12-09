<script setup>
import { inject, watch, ref } from 'vue'

const nombre = inject('nombre') // <-- ref compartido
const mensaje = ref('') // <-- valor que mostrarás

watch(nombre, (nuevoValor) => {
  mensaje.value = nuevoValor // <-- actualiza el mensaje visible
})
</script>

<template>
  <div class="bg-yellow-500 p-8">
    <p class="text-2xl">Hola desde el componente 3</p>

    <p>
      Nombre recibido por provide/inject:
      <strong>{{ nombre.value }}</strong>
    </p>

    <p class="mt-4">
      Valor detectado por watch:
      <strong>{{ mensaje }}</strong>
    </p>
  </div>
</template>
