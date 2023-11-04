// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLYeieRFYkt4Akiqc-c7E8A2w2jGnOaPc",
  authDomain: "adroit-31eb7.firebaseapp.com",
  projectId: "adroit-31eb7",
  storageBucket: "adroit-31eb7.appspot.com",
  messagingSenderId: "140942238625",
  appId: "1:140942238625:web:f81c48d8d888d7e76a61e0",
  measurementId: "G-RG61KSQ5RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {app,auth }