// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlp5wG8H29luDUZWU-mdB_wYE9l-Sm54c",
  authDomain: "venta-propiedades-88645.firebaseapp.com",
  projectId: "venta-propiedades-88645",
  storageBucket: "venta-propiedades-88645.appspot.com",
  messagingSenderId: "364023000503",
  appId: "1:364023000503:web:6c20f3ae17f64135b08c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)