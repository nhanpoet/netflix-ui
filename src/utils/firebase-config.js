// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtuglz-z3WuVGzqMprTMcQOCRwyICaPGs",
  authDomain: "react-netflix-clone-4351e.firebaseapp.com",
  projectId: "react-netflix-clone-4351e",
  storageBucket: "react-netflix-clone-4351e.appspot.com",
  messagingSenderId: "222039637490",
  appId: "1:222039637490:web:12f5165b77f4ffafcbff6b",
  measurementId: "G-WYQBKMJ6LP",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
