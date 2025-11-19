<script setup>
  
  let users = [
   /*  'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Black',
  ] */
//Colección de objetos
{
  'id': 1,
  'name': 'John Doe',
  },
  {
  'id': 2,
  'name': 'Jane Smith',
  },
  {
  'id': 3,
  'name': 'Alice Johnson',
  },
  {
  'id': 4,
  'name': 'Bob Brown',
  },
  {
  'id': 5,
  'name': 'Charlie Black',
  }
];
</script>

<template>
 <ul>
      <!-- <li v-for="user in users" v-if="user.id > 2">

        {{ user.id }} - {{ user.name }}

      </li> -->
      <template v-for="user in users">
        <li v-if="user.id > 2">
          {{ user.id }} - {{ user.name }}
        </li>

      </template>
        
      </ul>
</template>


<style scoped>

</style>
  