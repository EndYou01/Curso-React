
describe('Pruebas en el archivo demo.test.js', ()=>{
    
    test('deben de ser iguales los Strings', () => {
        
        //1.inicializacion
        const mensaje = 'Hola Mundo'
    
        //2.estimulo
        const mensaje2 = `Hola Mundo`
    
        //3.Obsevar el comportamiento
        expect( mensaje ).toBe(mensaje2)
    
    })


    
})


