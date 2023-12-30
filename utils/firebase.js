// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-409509.firebaseapp.com",
  projectId: "blogapp-409509",
  storageBucket: "blogapp-409509.appspot.com",
  messagingSenderId: "551949391579",
  appId: "1:551949391579:web:806e84d668de1a13ae5efe",
  measurementId: "G-KL953E58ST"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);