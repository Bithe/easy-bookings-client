// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "easy-booking-1e92c.firebaseapp.com",
  projectId: "easy-booking-1e92c",
  storageBucket: "easy-booking-1e92c.appspot.com",
  messagingSenderId: "686705155477",
  appId: "1:686705155477:web:b920cbf0bb9b62f609aa9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);