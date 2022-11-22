// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD46rTGfFh1rZG3P-i9NVTh7L7itWywYR8",
  authDomain: "afridishes-c92ad.firebaseapp.com",
  projectId: "afridishes-c92ad",
  storageBucket: "afridishes-c92ad.appspot.com",
  messagingSenderId: "876283397600",
  appId: "1:876283397600:web:c170891fe5f34fdc1b9785",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app
