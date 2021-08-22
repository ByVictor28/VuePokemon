import {shallowMount , mount} from '@vue/test-utils'
import PokemonPage from "@/pages/PokemonPage"
import {pokemons} from "../mocks/pokemons.mock"

describe('PokemonPage component', () => {
  
  let wrapper
  beforeEach(()=>{
    wrapper = shallowMount(PokemonPage)
  })
  //the screenshot is not eveluated becouse there is only the forst div 

  test('must call getPokemonArr when mount', () => {
    
    const  getPokemonArrSpy = jest.spyOn(PokemonPage.methods,"getPokemonArr")
    shallowMount(PokemonPage)
    
    expect(getPokemonArrSpy).toHaveBeenCalledTimes(1)
  })

  test('Snapshot match with pokemons ready', () => {
    const wrapper = mount(PokemonPage,{
      data(){
        return{
          pokemonArr:pokemons,
          pokemonSelected:pokemons[0],
          showPokemon:false,
          showResult:false,
          result:"",
          score:0
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should show PokemonImage and PokemonOptions', () => {
    // WITH MOUNT
    // const wrapper = mount(PokemonPage,{
    //   data(){
    //     return{
    //       pokemonArr:pokemons,
    //       pokemonSelected:pokemons[0],
    //       showPokemon:false,
    //       showResult:false,
    //       result:"",
    //       score:0
    //     }
    //   }
    // })
    

    // const divImage = wrapper.find('[pokemon-test-id="image"]')
    // const divOptions = wrapper.find('[pokemon-test-id="options"]')

    // expect(divImage.exists()).toBeTruthy()
    // expect(divOptions.exists()).toBeTruthy()

    // WITH SHALLOWMAUNT

    const wrapper = shallowMount(PokemonPage,{
      data(){
        return{
          pokemonArr:pokemons,
          pokemonSelected:pokemons[0],
          showPokemon:false,
          showResult:false,
          result:"",
          score:0
        }
      }
    })

    const imageStub = wrapper.find("pokemon-image-vue-stub")
    const optionsStub = wrapper.find("pokemon-options-vue-stub")
    
    expect(imageStub.exists()).toBeTruthy()
    expect(optionsStub.exists()).toBeTruthy()

    expect(imageStub.attributes("pokemonid")).toBe(pokemons[0].id.toString())
    expect(optionsStub.attributes("pokemons")).toBeTruthy()
    
  })
  test('test checkAnswer', async () => {
    const pokemonSelected = pokemons[0]
    const wrapper = shallowMount(PokemonPage,{
      data(){
        return{
          pokemonArr:pokemons,
          pokemonSelected,
          showPokemon:false,
          showResult:false,
          result:"",
          score:0
        }
      }
    })
    await wrapper.vm.checkAnswer(pokemonSelected.id)
    expect(wrapper.find("h2").text()).toBe(`Congratulation pokemon was ${pokemonSelected.name}`)
    console.log(wrapper.vm)
    expect(wrapper.vm.showPokemon).toBe(true)
    expect(wrapper.vm.score).toBe(1)
    
    await wrapper.vm.checkAnswer(10)
    expect(wrapper.vm.result).toBe(`Opss... pokemon was ${pokemonSelected.name}`)
  })
})