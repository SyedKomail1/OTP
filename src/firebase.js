import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXpDknQWtcVubpyDxuEMah_JD6wNAt4tQ",
    authDomain: "otp-app-demo-936ad.firebaseapp.com",
    projectId: "otp-app-demo-936ad",
    storageBucket: "otp-app-demo-936ad.appspot.com",
    messagingSenderId: "563463607952",
    appId: "1:563463607952:web:6d3695049c5bf39c286a15"
  };
  
  // Initialize Firebasen
  firebase.initializeApp(firebaseConfig);

  export default firebase