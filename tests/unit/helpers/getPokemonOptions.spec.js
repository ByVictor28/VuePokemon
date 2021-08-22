import getPokemonOptions, {getPokemonNames,randomInteger} from "@/helpers/getPokemonOptions"

describe("getPokemonOptions helpers",()=>{
  test('getRandomInteger', () => {
    const min = 0
    const max = 3
    const random = randomInteger(min,max)
    
    expect(random).toBeGreaterThanOrEqual(min)
    expect(random).toBeLessThanOrEqual(max)
  })
  

  test("getPokemonNames funtion, must return Array 4 elements with string inside",async ()=>{
    const pokemonList = await getPokemonNames([1,2,4,5])

    console.log(pokemonList)

    expect(pokemonList).toStrictEqual([
      { id: 1, name: 'bulbasaur', correct: false },
      { id: 2, name: 'ivysaur', correct: false },
      { id: 4, name: 'charmander', correct: false },
      { id: 5, name: 'charmeleon', correct: false }
    ])
  })

  test('getPokemonOptions, must return Array random',async () => {
      const pokemonList = await getPokemonOptions()
      expect(pokemonList.length).toBe(4)

      expect(pokemonList).toEqual([
        { 
          id: expect.any(Number),
          name: expect.any(String), 
          correct: expect.any(Boolean)
        },
        { 
          id: expect.any(Number),
          name: expect.any(String), 
          correct: expect.any(Boolean)
        },
        { 
          id: expect.any(Number),
          name: expect.any(String), 
          correct: expect.any(Boolean)
        },
        { 
          id: expect.any(Number),
          name: expect.any(String), 
          correct: expect.any(Boolean)
        }
      ])
  })
  
})