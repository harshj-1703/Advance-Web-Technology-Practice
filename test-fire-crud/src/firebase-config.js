// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzpzZncgQRXjw-mAA7WRf1iDpw5RznekA",
  authDomain: "book-store-309bb.firebaseapp.com",
  projectId: "book-store-309bb",
  storageBucket: "book-store-309bb.appspot.com",
  messagingSenderId: "353998997754",
  appId: "1:353998997754:web:49eb3d37fbd0d9e46b6143",
  measurementId: "G-HBRS7PG2TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);