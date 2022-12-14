import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-strings.js', ()=>{

    test('getSaludo debe retornar hola fernando', ()=>{
       
        const nombre = 'Fernando'

        const saludo = getSaludo( nombre )

        expect( saludo ).toBe( 'Hola ' + nombre + '!')
    })


    test('getSaludo debe retornar Hola Carlos! si no hay argumentos en el nombre', ()=>{
        
        const saludo = getSaludo()
        console.log(saludo)

        expect( saludo ).toBe( 'Hola Carlos!')
    })


})