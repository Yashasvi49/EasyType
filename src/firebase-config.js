import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCGLLSlFVSnIgXfD-AXWVk8d6rFFBnreR8",
  authDomain: "blogbyte-d53e5.firebaseapp.com",
  projectId: "blogbyte-d53e5",
  storageBucket: "blogbyte-d53e5.appspot.com",
  messagingSenderId: "995859078377",
  appId: "1:995859078377:web:d33fabd26bbd839f8ce478",
  measurementId: "G-FYFX4KBGSH"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export { auth, storage, db, googleProvider };
