<template>
  <h1 v-if="!pokemonSelected">Wait for a second</h1>
  <div v-else>
    <h1>Who is this pokemon?</h1>
    <PokemonImageVue :pokemonId="pokemonSelected.id" :showPokemon="showPokemon"/>
    <PokemonOptionsVue :pokemons="pokemonArr" @selection="checkAnswer($event)" :showResult="showResult"/>    
    <div v-if="showResult">
      <h2>{{result}}</h2>
      <button @click="newGame" class="bg-red-100 px-3 py-1 rounded-lg border-2 border-black hover:bg-red-300">New game</button>
    </div>
  </div>
</template>

<script>

import PokemonImageVue from '../components/PokemonImage.vue'
import PokemonOptionsVue from '../components/PokemonOptions.vue'
import getPokemonOptions from "@/helpers/getPokemonOptions.js"
import {randomInteger} from "../helpers/getPokemonOptions"

export default {
  name:"Pokemon Page",
  
  data(){
    return{
      pokemonArr:[],
      pokemonSelected:null,
      showPokemon:false,
      showResult:false,
      result:""
    }
  },
  methods:{
    async getPokemonArr(){
      this.pokemonArr =await getPokemonOptions()
      const randomPokemon = randomInteger(0,3)
      this.pokemonArr[randomPokemon].correct = true
      this.pokemonSelected = this.pokemonArr[randomPokemon]
    },
    checkAnswer(event){
      this.showPokemon = true
      this.result = event === this.pokemonSelected.id ? `Congratulation pokemon was ${this.pokemonSelected.name}`:`Opss... pokemon was ${this.pokemonSelected.name}`
      this.showResult=true
    },
    newGame(){
      this.pokemonSelected=null
      this.getPokemonArr()  
      this.showPokemon=false
      this.result = ""
      this.showResult = false
    }
  },
  mounted(){
    this.getPokemonArr()
  },

  components:{
    PokemonImageVue,
    PokemonOptionsVue
  }  
}
</script>