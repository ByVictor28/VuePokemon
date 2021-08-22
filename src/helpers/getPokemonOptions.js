import axios from "axios";
import pokemonAPI from "../api/pokemonAPI";

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPokemonOptions = async () =>{
  let pokemonOptions = []

  for (let index = 0; index < 4; index++) {
    pokemonOptions.push(randomInteger(1,650))
  }
  
  const pokemonNames = await getPokemonNames(pokemonOptions)
  console.log(pokemonNames)
  return pokemonNames
}


export const getPokemonNames =async (pokemons) => {
  
  const list = await Promise.all( 
    pokemons.map(async pokemon => {
      const res = await pokemonAPI.get(`/${pokemon}`)
      const {name} = res.data
      return {id:pokemon,name,correct:false}
    })  
  )
  return list
}

export default getPokemonOptions