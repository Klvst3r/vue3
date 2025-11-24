<script setup>
    import { ref } from 'vue'

    const mensaje = ref('¡Hola desde mi primer componente reutilizable!')
</script>

<template>
  <div class="my-component">
    <h2>{{ mensaje }}</h2>
    <p>Este componente vive en la carpeta "components".</p>
  </div>
</template>

<style scoped>
    .my-component{
        border: 1px solid #42b883;
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
    }
    h2 {
        color: #35495e;
    }

</style>