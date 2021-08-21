<template>
  <div class="">
    <div class="select-none w-full h-52 flex flex-col justify-center items-center ">
      <img class="filter brightness-0 w-52 h-52 absolute select-none" :src="imgSrc" alt="Pokemon Shadow">
      <img v-if="showPokemon" class="absolute w-52 h-52 fade-in" :src="imgSrc" alt="Pokemon">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    pokemonId:{
      type:Number,
      required:true
    },
    showPokemon:{
      type:Boolean,
      required:true,
      default:false
    }
  },
  
  computed:{
    imgSrc(){
      console.log("imgSrc",this.pokemonId)
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
    // showPokemonClasses(){
    //   // console.log(this.showPokemon)
    //   let classes = "transition-opacity duration-300 filter brightness-0 w-52 absolute select-none"
    //   classes = this.showPokemon ? classes + " opacity-0": classes + " opacity-100" 
    //   console.log(classes)
    //   return classes
    // }
  }
}
</script>

<style scope>
  img{
    -webkit-user-drag: none;
  }
  .fade-in {
    animation: fadeIn 0.3s;
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    -o-animation: fadeIn 0.3s;
    -ms-animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>