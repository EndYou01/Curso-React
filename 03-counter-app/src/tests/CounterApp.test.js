import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp'


describe('Pruebas en <CounterApp/>', () => {
  
    test('Debe mostrar <CounterApp/> correctamente', () => {
      
        const wrapper = shallow( <CounterApp />)

        expect( wrapper ).toMatchSnapshot()

    })

    test('debe de mostrar el valor por defecto de 100 ', () => {
      
        const wrapper = shallow( <CounterApp value={ 100 }/>)
        

    })
    
    

})





