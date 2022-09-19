importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAuWOh4w1bWCTTIsafUtCj3d2fAemgYVUc",
    authDomain: "chat4-e3654.firebaseapp.com",
    projectId: "chat4-e3654",
    storageBucket: "chat4-e3654.appspot.com",
    messagingSenderId: "186888336626",
    appId: "1:186888336626:web:9d035c3168dadaf8cb4c6b"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});