import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        console.log('setIsLoggedIn true')
      } else {
        setIsLoggedIn(false);
        console.log('setIsLoggedIn false')

      }

      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <h1 className='espere'>Espere...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>


        <Route exact path="/*" element={
          <PublicRoute logged={isLoggedIn}>
            <AuthRouter />
          </PublicRoute>
        } />

        <Route exact path="/" element={
          <PrivateRoute logged={isLoggedIn}>
            <JournalScreen />
          </PrivateRoute>
        } />


      </Routes>
    </BrowserRouter>
  )
}
