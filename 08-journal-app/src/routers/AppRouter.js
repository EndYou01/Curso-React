import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

              <Route exact path="/" element={<JournalScreen/>}/>
              
              <Route exact path="/*" element={<AuthRouter/>}/>

              
            </Routes>
        </BrowserRouter>
    )
}
