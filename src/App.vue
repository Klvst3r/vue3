<script setup>

  import { reactive, computed } from 'vue';
  //let user = 0;

  const user = reactive({
    name: 'Klvst3r',
    lastname: 'IO',
    age: 43
  });

  const estado = computed(() => {
    return user.age >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
  });

  function increment(){
    //user++;
    //console.log(user);

    //Vamoa a modificar una propiedad del objeto
    user.age++; //Objeto.value.age
  }

  function decrement(){
    user.age--;
    //console.log(user);
  }
</script>

<template>
  <button @click="decrement">-</button>
  <span>{{ user.age }}</span>
  <button @click="increment">+</button>

  <p>
    <!-- Mostrar mensaje según mayoría de edad -->
    {{ estado }}
  </p>
  
  <!-- <p>{{ estado }}</p>

  <p>{{ estado }}</p>

  <p>{{ estado }}</p> -->
</template>
 
<style scoped>
  span{
    padding: 0 10px;
  }
</style>
 