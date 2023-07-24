// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
 const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDydEe86K6ciLUo1nnlIc_BIF6ist5O4cw",
  authDomain: "ecommerceclone-e2c21.firebaseapp.com",
  projectId: "ecommerceclone-e2c21",
  storageBucket: "ecommerceclone-e2c21.appspot.com",
  messagingSenderId: "344567478120",
  appId: "1:344567478120:web:9b0bede4a6e203b99ac8dd",
  measurementId: "G-RBH51DHMRP"
  
})

const auth=firebase.auth();
export  {auth};