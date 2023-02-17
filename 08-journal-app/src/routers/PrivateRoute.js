
import React from 'react'

import { Navigate } from "react-router-dom";

export const PrivateRoute = (isLoggedIn) => {

  const { children, logged } = isLoggedIn


  console.log('private')

  console.log(logged)


  return (
    (logged)
      ? children
      : <Navigate to={'/auth/login'} />
      )
}
