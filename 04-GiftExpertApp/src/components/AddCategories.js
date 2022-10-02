import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategories = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('Hola Mundo')
  
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if( inputValue.trim().length > 2){
            setCategories(cats => [...cats, inputValue])
            setInputValue('')
        }

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
        </>

  )
}

AddCategories.propTypes ={
    setCategories: PropTypes.func.isRequired
}
