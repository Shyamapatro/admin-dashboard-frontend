import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAuWOh4w1bWCTTIsafUtCj3d2fAemgYVUc",
  authDomain: "chat4-e3654.firebaseapp.com",
  projectId: "chat4-e3654",
  storageBucket: "chat4-e3654.appspot.com",
  messagingSenderId: "186888336626",
  appId: "1:186888336626:web:9d035c3168dadaf8cb4c6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

export const requestForToken = () => {
  getToken(messaging, { vapidKey: 'BIa2kHBx5zKC1SQWGbnCE0GHi8GdO-w_HSci7puilViWtjpWut3AOOjl3QIIr64FTFiJfmRzsu9DVCWS_HWhIsw' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log('current token for client: ',currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
   
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  
  });
  };
  
  export const onMessageListener = () =>
    new Promise((resolve) => {    
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });
const messaging = getMessaging(app);




