import firebase from 'firebase/app';

import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNgckiV-kUxRcsUvxPhpX6W2PU9CIOsTY",
  authDomain: "aulafirebase-f2bf5.firebaseapp.com",
  projectId: "aulafirebase-f2bf5",
  storageBucket: "aulafirebase-f2bf5.appspot.com",
  messagingSenderId: "1082747563850",
  appId: "1:1082747563850:web:80cd59153f0ef67c3f1bb3",
  measurementId: "G-YJ1YE5XMNQ"
  };
  
// Initialize Firebase

if (firebase.app.lenght === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;