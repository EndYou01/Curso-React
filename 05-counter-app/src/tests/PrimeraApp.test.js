// import {render} from '@testing-library/react'
import PrimerApp from '../PrimeraApp'
import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'

describe('Pruebas en <PrimeraApp/>', () => {
  
    // test('debe mostrar el mensaje "Hola, soy Goku', () => {
    //     const saludo = "Hola, soy Goku"
    //     const { getByText } = render ( <PrimerApp saludo={saludo}/> )
    //     expect( getByText( saludo ) ).toBeInTheDocument()
    // })
    
    test('debe mostar <PrimeraApp/> correctamente', () => {
        
        const saludo = 'Hola, soy Goku'
        const wrapper = shallow( <PrimerApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot() 

    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
      
        const saludo = 'Hola, soy Goku'
        const subtitulo = 'Soy un subtitulo'
        
        const wrapper = shallow( 
            <PrimerApp 
            saludo={saludo}
            subtitulo={subtitulo}
            />
        )

        const textoParrafo = wrapper.find('p').text()

        expect(textoParrafo).toBe(subtitulo)
        

    })
    

})
