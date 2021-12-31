// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhsgRuslKVtSlEn7pd30wA2JNIOCks5tw",
  authDomain: "my-airline-app-vmro.firebaseapp.com",
  databaseURL: "https://my-airline-app-vmro-default-rtdb.firebaseio.com",
  projectId: "my-airline-app-vmro",
  storageBucket: "my-airline-app-vmro.appspot.com",
  messagingSenderId: "401648765358",
  appId: "1:401648765358:web:9384325f2b1d71864c203f",
  measurementId: "G-1S6E3P2SE2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Get a reference to the database service
export const database = getDatabase(app);
