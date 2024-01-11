
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyn72hq-4s2nSaaIpmMyetU791Wj2GL2k",
  authDomain: "blog-website-4e6f9.firebaseapp.com",
  projectId: "blog-website-4e6f9",
  storageBucket: "blog-website-4e6f9.appspot.com",
  messagingSenderId: "58369926033",
  appId: "1:58369926033:web:1a3c4da7d4755b99e77030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()