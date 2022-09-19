// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD07OyKvWT4R0L7GD7jec5-2AJYPLob0-0",
  authDomain: "chat2-9d06a.firebaseapp.com",
  projectId: "chat2-9d06a",
  storageBucket: "chat2-9d06a.appspot.com",
  messagingSenderId: "1047045114882",
  appId: "1:1047045114882:web:6981e7892e7c3d2b7f6b1b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
