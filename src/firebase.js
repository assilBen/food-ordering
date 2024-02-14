// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOkdER-FDd9-j7ZofdD1lXTOc_H7K_H2E",
  authDomain: "food-1a817.firebaseapp.com",
  projectId: "food-1a817",
  storageBucket: "food-1a817.appspot.com",
  messagingSenderId: "21157953078",
  appId: "1:21157953078:web:070feb6e1836847b28a297",
  measurementId: "G-7M4NKKQ37R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);