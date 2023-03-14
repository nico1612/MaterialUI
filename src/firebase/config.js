// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYgV3T0Do9n0k2DR4UtF4shpJ1jUaYkPQ",
  authDomain: "react-curso-bbda3.firebaseapp.com",
  projectId: "react-curso-bbda3",
  storageBucket: "react-curso-bbda3.appspot.com",
  messagingSenderId: "1004351778499",
  appId: "1:1004351778499:web:63f67abb100648ad4ebc76"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(firebaseApp)
export const FirebaseDB = getFirestore(firebaseApp)