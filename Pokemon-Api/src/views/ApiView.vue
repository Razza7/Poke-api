<script setup>
import {ref, onMounted, computed } from 'vue'
import PhotoCard from '../components/PhotoCard.vue'


</script>

<template>
  <div class="new" >
    <h1>Lista de Pokemons</h1>
  
    <div class="cards" v-for="(data,index) in pokemons" :key="index">

  <PhotoCard :pokemon_info="selected_pokemon" />  
</div>
  </div>

  
</template>


<script>

import axios from 'axios';

export default{
  components: {PhotoCard},
  
  data(){
    return{
      pokemons: [],
      selected_pokemon: [],
      pokemon:{
        name: "",
        id: "",
        img: "",
        
        
      }
    };
  },
  created(){
    let instance= this;

    for(let i=0; i<=10; i++){
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
      .then ((response)=>{
        console.log(response.data.name)
        let pokemon = {
        img: response.data.sprites.front_default, 
        name: response.data.name,
        id: response.data.id,
        }; 
        instance.pokemons.push(pokemon);
        })
      .catch((err)=>{
        console.log(err);
      });
    }
      console.log(this.pokemons);
     
    },
    methods: {
      send_info(pokemon_info){
        console.log(pokemon_info);
        this.selected_pokemon=pokemon_info;
      }
      
    },
  };


</script>

<style>
.new {
  display: grid;
}
li {
  cursor: pointer;
}
li:hover {
  color: hsla(160, 100%, 37%, 1);
}
.cards {
  display: flex;
  gap: 2rem;
  max-width: 50vw;
  flex-wrap: wrap;
}
</style>