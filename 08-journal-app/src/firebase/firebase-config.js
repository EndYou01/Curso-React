// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7eQwn_jozNyi8pEUegZfPbRI_UTHYw_c",
  authDomain: "journal-react-app-6ef8f.firebaseapp.com",
  projectId: "journal-react-app-6ef8f",
  storageBucket: "journal-react-app-6ef8f.appspot.com",
  messagingSenderId: "753627153296",
  appId: "1:753627153296:web:33fd9287f5cb1a7bc9e915"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// // const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}