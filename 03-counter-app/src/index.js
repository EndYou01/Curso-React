import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp';
// import PrimerApp from './PrimeraApp';
import './index.css'


const divRoot = ReactDOM.createRoot(document.getElementById('root'));


// divRoot.render(
//     <PrimerApp saludo="Hola, soy Goku"/>
//  )

divRoot.render(
   <CounterApp />
)

 