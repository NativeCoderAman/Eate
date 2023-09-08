import firebase from "firebase/compat/app";
// import "firebase/compat/firestore"; remove 
import "firebase/compat/auth";
import "firebase/compat/firestore";

const FirebaseConfig = {
    apiKey: "AIzaSyCryX-qOxQOssVK9OjiE_BzwUNikHjzbP8",
    authDomain: "foodapp-e552a.firebaseapp.com",
    projectId: "foodapp-e552a",
    storageBucket: "foodapp-e552a.appspot.com",
    messagingSenderId: "508010395754",
    appId: "1:508010395754:web:016208a23e325942d23213"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
  }
  
  // firebase.firestore().settings({ experimentalForceLongPolling: true });


   export {firebase};