import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDAOOxR6Lm1kY5-DOR1QGnaBH7Z0am8i8Q",
  authDomain: "react-bootcamp-30bca.firebaseapp.com",
  projectId: "react-bootcamp-30bca",
  storageBucket: "react-bootcamp-30bca.appspot.com",
  messagingSenderId: "984364954167",
  appId: "1:984364954167:web:85c29fcb1cf3b4663185b2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
