
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAi2V-JtSdvXoZIaXB9U85fc8w_JcGUNw",
  authDomain: "proyecto-final-a8816.firebaseapp.com",
  projectId: "proyecto-final-a8816",
  storageBucket: "proyecto-final-a8816.appspot.com",
  messagingSenderId: "1094289232986",
  appId: "1:1094289232986:web:9c3eaf35abd9fb2db9b463",
  measurementId: "G-4E2JL0MEBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
