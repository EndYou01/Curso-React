import React from 'react'
import {
    useNavigate ,
    Route,
    Routes,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {

    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => {
            navigate("/auth/login")
        }}>
            Login
        </button>

        <button onClick={ () => {
            navigate("/auth/register")
        }}>
            Register
        </button>
        
            <Routes>
                <Route path="/auth/login" element={<LoginScreen/>}/>
                <Route path="/auth/register" element={<RegisterScreen/>}/>
                <Route path="/*" element={<LoginScreen/>}/>
            </Routes>
        </>
    )
}
