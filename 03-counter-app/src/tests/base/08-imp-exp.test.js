import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"

describe('Pruebas en funciones de Heroes', ()=>{

    test('debe de retornar un heroe por id', () => {
      
        const id = 1
        const heroe = getHeroeById(id)

        const heoreData = heroes.find( heroe => heroe.id)

        expect( heroe ).toEqual( heoreData )

    })

    test('debe de retornar undefined si heroe no existe', () => {
      
        const id = 10
        const heroe = getHeroeById(id)


        expect( heroe ).toBe( undefined )

    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
      
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        const heroData = heroes.filter( heroe => heroe.owner === owner)

        expect(heroes).toEqual(heroData)

    })
    
    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        const heroData = heroes.filter( heroe => heroe.owner === owner)

        expect(heroData.length).toBe(2)

    })
    

    

})
