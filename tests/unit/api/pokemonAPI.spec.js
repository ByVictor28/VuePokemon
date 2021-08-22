import pokemonAPI from "@/api/pokemonAPI"

describe("pokemonAPI",()=>{
  test("Base url for axios",()=>{
    const {baseURL} = pokemonAPI.defaults
    
    expect(baseURL).toBe("https://pokeapi.co/api/v2/pokemon")
  })
})