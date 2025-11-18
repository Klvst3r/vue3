<script setup>

  import { ref } from 'vue';
  //let user = 0;

  const user = ref({
    name: 'Klvst3r',
    lastname: 'IO',
    age: 43
  });

  function increment(){
    //user++;
    //console.log(user);

    //Vamoa a modificar una propiedad del objeto
    user.value.age++; //Objeto.value.age
  }

  function decrement(){
    user.value.age--;
    //console.log(user);
  }
</script>

<template>
  <button @click="decrement">-</button>
  <span>{{ user.age }}</span>
  <button @click="increment">+</button>
  
</template>
 
<style scoped>
  span{
    padding: 0 10px;
  }
</style>
 