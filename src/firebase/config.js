// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
import { getEnvironments } from '../helpers/getEnvironments';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const{
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
}=getEnvironments()
// dev conection
/*const firebaseConfig = {
  apiKey: "AIzaSyBYgV3T0Do9n0k2DR4UtF4shpJ1jUaYkPQ",
  authDomain: "react-curso-bbda3.firebaseapp.com",
  projectId: "react-curso-bbda3",
  storageBucket: "react-curso-bbda3.appspot.com",
  messagingSenderId: "1004351778499",
  appId: "1:1004351778499:web:63f67abb100648ad4ebc76"
};*/


//testing conection 
/*const firebaseConfig = {
  apiKey: "AIzaSyAIyJoOpIuFQ3i6fT2lxcE1_k1pKUWbAFc",
  authDomain: "testing-curso-react.firebaseapp.com",
  projectId: "testing-curso-react",
  storageBucket: "testing-curso-react.appspot.com",
  messagingSenderId: "596273871325",
  appId: "1:596273871325:web:979b615d4e9d4d24ff9e34"
};*/
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
}
console.log(firebaseConfig)
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(firebaseApp)
export const FirebaseDB = getFirestore(firebaseApp)