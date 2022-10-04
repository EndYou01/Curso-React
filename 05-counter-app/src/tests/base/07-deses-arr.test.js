import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('Realizando prueba en 07-deses-arr.js',()=>{

    test('Debe de retornar un String y un numero', () => {

        const [letras, numeros] = retornaArreglo() //['ABC', 123], 

        // expect( arr ).toEqual( ['ABC', 123])
        console.log(typeof numeros)

        expect(letras).toBe( 'ABC' )
        expect(typeof letras).toBe( 'string' )


        expect(numeros).toBe( 123 )
        expect(typeof numeros).toBe( 'number' )

    })
    


})