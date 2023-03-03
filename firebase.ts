import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDns8cM7jI4pJln33K1UbEsUg7Ne_lUjs",
  authDomain: "mychatgpt-65539.firebaseapp.com",
  projectId: "mychatgpt-65539",
  storageBucket: "mychatgpt-65539.appspot.com",
  messagingSenderId: "109622202807",
  appId: "1:109622202807:web:0af7dd6961784e84419832",
  measurementId: "G-G3ZSM6S5BG"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};