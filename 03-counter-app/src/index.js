import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp';
import PrimerApp from './CounterApp';
import './index.css'


const divRoot = ReactDOM.createRoot(document.getElementById('root'));


divRoot.render(
    <CounterApp value={10}/>
 )