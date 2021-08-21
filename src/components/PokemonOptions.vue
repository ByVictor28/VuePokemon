<template>
  <div class="flex flex-col items-center">
    <ul class="">
      <li 
        class="bg-red-200 my-4 w-36 py-1 hover:bg-red-400 rounded-md cursor-pointer transition-colors"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click=" $emit('selection',pokemon.id)"
      >
        <span :class="[showResult && pokemon.correct?'text-green-400':'text-red-400']">{{pokemon.name}}</span>
      </li>
    </ul>
    
    
  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      required:true
    },
    showResult:{
      
    }
  },
  watch:{
    pokemons:(value)=>{
      console.log(value)
    }
  }
}
</script>

<style>

</style>