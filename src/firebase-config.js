
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUs2z7pnj4qnI7VUuGS45dFVcydGREO3g",
  authDomain: "blog-website-e56ed.firebaseapp.com",
  projectId: "blog-website-e56ed",
  storageBucket: "blog-website-e56ed.appspot.com",
  messagingSenderId: "159722368890",
  appId: "1:159722368890:web:71d5b0c444c2f6a2f830c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()