<script setup>
  
  let users = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Black',
  ]
</script>

<template>
    <ul>
      <li v-for="(user, index) in users">
        {{ index }} - {{ user }}</li>
      </ul>
</template>


<style scoped>

</style>
  