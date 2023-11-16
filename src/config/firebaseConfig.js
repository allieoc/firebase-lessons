// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
//allows you to connect to db
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// for auth
import{getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZm0_3lVZ5iaRxWkxfqE6fHh7Sdbw5Rhk",
  authDomain: "fir-blog-fd2e8.firebaseapp.com",
  projectId: "fir-blog-fd2e8",
  storageBucket: "fir-blog-fd2e8.appspot.com",
  messagingSenderId: "242230258414",
  appId: "1:242230258414:web:d5cc247d1281fda23be1ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//setup database and export it
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// set up auth and export it
export const auth = getAuth(app);