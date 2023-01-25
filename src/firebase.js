import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUy2TnlQQP-4ehH7v4JkwQQAEJr7D43D0",
  authDomain: "movie-search-80542.firebaseapp.com",
  projectId: "movie-search-80542",
  storageBucket: "movie-search-80542.appspot.com",
  messagingSenderId: "1054881303889",
  appId: "1:1054881303889:web:b9ecbb660b945a2ff85770",
  measurementId: "G-LD6G10V3RZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
