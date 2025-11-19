<script setup>
import { ref } from 'vue'

const name = ref('') //utilizamos con constantes por que el objeto no va a cambiar
const paises = ref([])

function save() {
  // ejemplo: agregar name a paises
  /* if (name.value.trim() !== '') {
    paises.value.push(name.value)
    name.value = '' // limpiar input
  } */
  //Vamosa acceder al aray paises con el metodo push, pasamos el value del objeto
  paises.value.push(name.value); //agrtegamos un elemento
}
</script>

<template>
  <form @submit.prevent="save">
    <input type="text" v-model="name">
    <button>Guardar</button>
  </form>  

  <!-- {{ name }} -->

  <p v-if="paises.length">Paises</p>
  <ul>
    <li v-for="(pais, index) in paises" :key="index">
      {{ pais }}
    </li>
  </ul>
</template>

<style scoped></style>
