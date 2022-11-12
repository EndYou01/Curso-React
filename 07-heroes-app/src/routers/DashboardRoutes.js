import React from 'react'
import {
    // BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <> 
        <Navbar/>

        <div className='container mt-2'>
        <Routes>
            <Route path="/marvel" element={<MarvelScreen/>}/>
            <Route path='/heroe/:heroeId' element={<HeroScreen/>}/>
            <Route path="/dc" element={<DcScreen/>}/>

            <Route path="/" element={<MarvelScreen/>}/>

        </Routes>

        </div>
    </>
  )
}
