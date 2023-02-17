import React from 'react'

import { Navigate } from "react-router-dom";



export const PublicRoute = (isLoggedIn) => {

  const { children, logged } = isLoggedIn;

  console.log('public')
  console.log(logged)

  return (
    ( logged )
      ? <Navigate to={'/'} />
      : children
  )
}

