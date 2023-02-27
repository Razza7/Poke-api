<script setup>

import {ref, onMounted} from 'vue' 
import PhotoCard from '../components/PhotoCard.vue';


</script>

<template>
  <div class="new">
    <h1>Detalles de pokemon:</h1>
    <p>ID: {{ detalle }}</p>
    
   
  </div>
</template>

<script>


export default {
  data() {
    return{
      detalle:"Soy un detalle"
    }

  },
}
</script>

<style>
.new {
  display: grid;
}
</style>

