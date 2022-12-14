import React, {useState as pepe} from 'react'
import PropTypes from "prop-types";

const CounterApp = ({ value=10 }) => {

const [counter, setCounter] = pepe(value) //Retorna un arreglo con dos valores


    // handleAdd
    const handleAdd = () => setCounter(counter + 1)
    
    const handleReset = () => setCounter(value)
    
    const handleSubtract = () => setCounter(counter - 1)

    return (

        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>

        )
}

// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired
// }

export default CounterApp