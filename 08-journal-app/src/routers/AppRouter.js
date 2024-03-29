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
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {

    firebase.auth().onAuthStateChanged(async(user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);


        dispatch(startLoadingNotes( user.uid ))

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <h1 className='espere'>Please Wait...</h1>
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
