import React, { useContext } from 'react'

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';


export const PrivateRoute = ({children}) => {

    const {pathname} = useLocation()

    console.log(pathname)

    const {user} = useContext(AuthContext)

    localStorage.setItem('lastPath', pathname)

  return user.logged
        ? children
        : <Navigate to={'/login'}/>
}
