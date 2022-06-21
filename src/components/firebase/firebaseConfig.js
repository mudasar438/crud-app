// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkh9vN0vy30wgOOF1PhWetOx0d-3VLh4",
  authDomain: "mern-crud-21750.firebaseapp.com",
  projectId: "mern-crud-21750",
  storageBucket: "mern-crud-21750.appspot.com",
  messagingSenderId: "537946836512",
  appId: "1:537946836512:web:0f50cef4ed5f105a9d7645"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)