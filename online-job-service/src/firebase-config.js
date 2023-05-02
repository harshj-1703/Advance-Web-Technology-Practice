// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7uB4j4nWz3XVIVCONbY9AC3MK2n_iYN0",
  authDomain: "job-service-72ac6.firebaseapp.com",
  projectId: "job-service-72ac6",
  storageBucket: "job-service-72ac6.appspot.com",
  messagingSenderId: "1043271451281",
  appId: "1:1043271451281:web:aab127d43563fd8b2d3530",
  measurementId: "G-65C7M5P9H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);