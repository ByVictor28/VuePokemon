import {shallowMount} from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"
import { pokemons } from "../mocks/pokemons.mock"


describe('PokemonOptions component', () => {
  test('sreenshot match', () => {
    const wrapper = shallowMount(PokemonOptions,{
      props:{
        pokemons
      }
    }) 
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('show the 4 options correctly', () => {
    const wrapper = shallowMount(PokemonOptions,{
      props:{
        pokemons
      }
    }) 
    const [li1,li2,li3,li4] = wrapper.findAll("li")
    
    expect(li1.text()).toBe(pokemons[0].name)
    expect(li2.text()).toBe(pokemons[1].name)
    expect(li3.text()).toBe(pokemons[2].name)
    expect(li4.text()).toBe(pokemons[3].name)
  })

  test('emit selection event when clicking a li', () => {
    const wrapper = shallowMount(PokemonOptions,{
      props:{
        pokemons
      }
    }) 
    const [li1,li2,li3,li4] = wrapper.findAll("li")

    li1.trigger("click")
    li2.trigger("click")
    li3.trigger("click")
    li4.trigger("click")

    expect(wrapper.emitted("selection")[0]).toEqual([pokemons[0].id])
    expect(wrapper.emitted("selection")[1]).toEqual([pokemons[1].id])
    expect(wrapper.emitted("selection")[2]).toEqual([pokemons[2].id])
    expect(wrapper.emitted("selection")[3]).toEqual([pokemons[3].id])
  })
  
  
  
})
