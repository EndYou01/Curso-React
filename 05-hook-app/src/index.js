import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HookApp } from './HookApp';
// import {CounterApp} from './components/01-useState/CounterApp'
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEfect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEfect/FormWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <FormWithCustomHook />
);

