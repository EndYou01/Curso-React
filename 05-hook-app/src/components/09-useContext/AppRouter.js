
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { LogginScreen } from './LogginScreen';
import { HomeScreen } from './HomeScreen';
  
  export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/about' element={<AboutScreen/>} />
                    <Route exact path='/login' element={<LogginScreen/>} />
                    <Route exact path='/' element={<HomeScreen/>} />
                </Routes>

            </div>
        </Router>
    )
  }
  