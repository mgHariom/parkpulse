// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore'
//import  initializeApp  from 'firebase/app';
//import 'firebase/auth'; // Import other Firebase modules as needed
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtyCYk90iF0grEl60AAPNM-G3kKnKIlh8",
  authDomain: "parkpulse-b6150.firebaseapp.com",
  projectId: "parkpulse-b6150",
  storageBucket: "parkpulse-b6150.appspot.com",
  messagingSenderId: "359422083315",
  appId: "1:359422083315:web:cdfeb66efe98bb61ed3786",
  measurementId: "G-F6E2CYGSYE"
};

//Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {firebaseConfig,auth};