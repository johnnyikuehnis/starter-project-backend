// util/FirebaseInit.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClLsX3st3w-k3c0IVPEEDXqsz-pnrKPq4",
  authDomain: "fsab-starter.firebaseapp.com",
  projectId: "fsab-starter",
  storageBucket: "fsab-starter.appspot.com",
  messagingSenderId: "419969074545",
  appId: "1:419969074545:web:3232fb3925c964223322d0",
  measurementId: "G-L4HPK7ZZNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

