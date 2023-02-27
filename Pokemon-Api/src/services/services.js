import axios from 'axios'

const myAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPokemons() {
    for (let i=0; i<=5;i++){
    return myAPI.get(`/pokemon/${i+1}`);
  }
  },

  getPokemon( id ) {
    
    return myAPI.get('/pokemon'+id );
    }
  }



