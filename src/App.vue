<script setup>
    import { ref } from 'vue';
    
    const count = ref(0);

    function increment(a, event) {
      count.value += a;
      console.log(event);
    }

    function decrement(a, event){
      count.value -= a;

      console.log(event);
    }

</script>

<template>
  <!-- transmitimos el evento -->
  <button @click="decrement(2, $event)">-</button> 

  <span class="count">
    {{ count }}
  </span>

  <button @click="increment(2, $event)">+</button>
 
</template>


<style scoped>
  .count{
    margin: 0 10px;
  }
</style>
  