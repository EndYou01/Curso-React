//Before

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

//After
// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyD5-4gUUrMLCzTWDEJ3QpkmfIboN5PDCq4",
//   authDomain: "push-one-signal-17ede.firebaseapp.com",
//   databaseURL: "https://push-one-signal-17ede.firebaseio.com",
//   projectId: "push-one-signal-17ede",
//   storageBucket: "push-one-signal-17ede.appspot.com",
//   messagingSenderId: "803724161810",
//   appId: "1:803724161810:web:02f32ebc98a71e376339cb"
// }


// if (process.env.NODE_ENV === 'test') {
//   // testing
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   // dev/prod
//   firebase.initializeApp(firebaseConfig);
// }

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