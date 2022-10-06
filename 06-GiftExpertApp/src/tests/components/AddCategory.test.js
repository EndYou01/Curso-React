import React from 'react'
import '@testing-library/jest-dom';

import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategories'
describe('Pruebas en <AddDirectory/>', () => {
    
    const setCategories = () => {}
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>)


    test('debe de mostrarse el componente', () => {
      
        expect( wrapper ).toMatchSnapshot()

    })


})

