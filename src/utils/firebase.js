// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS6bk2fs9JQYvBV0fu6ebNQICGHtyK01Y",
  authDomain: "netflixgpt-ac5dd.firebaseapp.com",
  projectId: "netflixgpt-ac5dd",
  storageBucket: "netflixgpt-ac5dd.appspot.com",
  messagingSenderId: "1018242088634",
  appId: "1:1018242088634:web:935ce01016b7512cc44c83",
  measurementId: "G-P3C2W2SM2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
