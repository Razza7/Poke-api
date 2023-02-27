
<script setup>
import {ref, onMounted, computed } from 'vue'


</script>



<template>
  <div>
  <div class="scene scene--card">
  <div class="card" @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )"
  v-bind:class="{ flipme: cardOne == 'flipped' }">
 
<div class="card__face card__face--front" >
    <h1>name</h1>
    <h2>imagen</h2>
    <p>Id: </p>
    

<button @click="$router.push({ name:'pokemon', params: {pokemonId: 'detalle'}} )">View more...</button>
</div>

  <div class="card__face card__face--back">
    <h1>Detalles:</h1>
    <h2></h2>
    <p>abilities</p>
  </div>

</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cardOne: "start"
    };
  }
};
</script>



<style scoped>
.scene {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  perspective: 600px;
}


.card {
  position: flex;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  padding: 2rem 4rem;
  background-color: transparent;
}


.card__face {

  display: flex;
  flex-direction:column;
  padding: 1rem;
  border: 2px solid rgb(31, 171, 209);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 5px 5px #eee;
  width: fit-content;
  min-width: 200px;
  max-width: 250px;
  backface-visibility: hidden;
}

.card__face--front {
  
  background: radial-gradient(circle at center, rgb(250, 248, 248) 0, rgb(232, 166, 53), rgb(233, 73, 20) 100%);
  
}

.card__face--back {
  background: rgb(255, 221, 0);
  transform: rotateY(180deg);
 
}
.flipme {
  transform: rotateY(180deg);
}
.card button {
  margin-top: 20px;
}
</style>
