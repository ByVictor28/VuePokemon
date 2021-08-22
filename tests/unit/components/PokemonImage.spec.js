import { shallowMount } from "@vue/test-utils"
import PokemonPicture from "@/components/PokemonImage"

describe("PokemonImage componebt",()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallowMount(PokemonPicture,{
      props:{
        pokemonId:100,
        showPokemon:false
      }
    })
  })
  
  test('snapshot match', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('show hidden image and pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture,{
      props:{
        pokemonId:100,
        showPokemon:false
      }
    })

    const [img1,img2] = wrapper.findAll("img")

    expect(img1.exists()).toBeTruthy()
    expect(img2).toBe(undefined)
    console.log(img1.classes())
    expect(img1.classes("brightness-0")).toBeTruthy()

    expect(img1.attributes("src")).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${100}.svg`)
  })

  test('show pokemon image, pokemon 100 when showPokemon=true', () => {
    const wrapper = shallowMount(PokemonPicture,{
      props:{
        pokemonId:100,
        showPokemon:true
      }
    })

    const [img1,img2] = wrapper.findAll("img")

    expect(img1.exists()).toBeTruthy()
    expect(img2.exists()).toBeTruthy()
    expect(img2.classes("fade-in")).toBeTruthy()
    
  })
  
})