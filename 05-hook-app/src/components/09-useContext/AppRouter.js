
import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { LogginScreen } from './LogginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';
  
  export const AppRouter = () => {
    return (
        <BrowserRouter>
              <NavBar/>
                <div className='container'>
                  <Routes>
                      <Route exact path='/about' element={<AboutScreen/>} />
                      <Route exact path='/login' element={<LogginScreen/>} />
                      <Route exact path='/' element={<HomeScreen/>} />
                  </Routes>
                </div>
        </BrowserRouter>
    )
  }
  