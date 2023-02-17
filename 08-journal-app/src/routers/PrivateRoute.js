
import React from 'react'

import { Navigate } from "react-router-dom";

export const PrivateRoute = (isLoggedIn) => {

  const { children, logged } = isLoggedIn

  return (
    (logged)
      ? children
      : <Navigate to={'/auth/login'} />
      )
}
