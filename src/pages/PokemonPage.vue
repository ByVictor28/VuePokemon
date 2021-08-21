<template>

  <div class="bg-red-200 p-4">
    <h1>Who is this pokemon?</h1>
    <h3 class="font-bold text-2xl">Score: {{score}}</h3>
  </div>
  <h1 v-if="!pokemonSelected">Wait for a second</h1>
  <div v-else>
    <PokemonImageVue :pokemonId="pokemonSelected.id" :showPokemon="showPokemon"/>
    <PokemonOptionsVue :pokemons="pokemonArr" @selection="checkAnswer($event)" :showResult="showResult"/>    
    <!-- <div v-if="showResult"> -->
    <h2>{{result}}</h2>
    <div class="flex gap-4 justify-center">
      <button @click="nextPokemon" class="bg-red-100 px-3 py-1 rounded-lg border-2 border-black hover:bg-red-300">Next pokemon</button>
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
      result:"",
      score:0
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
      if (this.pokemonSelected.id === event) {
        this.result = `Congratulation pokemon was ${this.pokemonSelected.name}`
        this.score++
      }else{
        this.result = `Opss... pokemon was ${this.pokemonSelected.name}`
      }
      this.showResult=true
    },
    newGame(){
      this.pokemonSelected=null
      this.getPokemonArr()  
      this.showPokemon=false
      this.result = ""
      this.showResult = false
      this.score = 0
    },
    nextPokemon(){
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