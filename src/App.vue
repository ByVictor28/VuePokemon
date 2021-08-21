<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <div class="bg-red-400">HOla</div> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PokemonPage></PokemonPage>
</template>

<script>
//import PokemonPage from "./pages/PokemonPage.vue"
import "./assets/tailwind.css"
import PokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PokemonPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
