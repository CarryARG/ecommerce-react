// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5DPIYwf15p_Jik2SG3d1_DuMuzsXMwkI",
  authDomain: "ecommerce-react-coderhou-f2cc6.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-f2cc6",
  storageBucket: "ecommerce-react-coderhou-f2cc6.appspot.com",
  messagingSenderId: "13375874757",
  appId: "1:13375874757:web:8f3ffdbd162b31965c72ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
