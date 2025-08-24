// Firebase modular SDK bootstrap. Replace the config object with your project's values.
// See: https://console.firebase.google.com/ -> Project Settings -> Your apps -> SDK setup and configuration

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS0OPKQyM_HAQon0gRglTKGMzWZVkMuao",
  authDomain: "staticliberalblog.firebaseapp.com",
  projectId: "staticliberalblog",
  storageBucket: "staticliberalblog.appspot.com",
  messagingSenderId: "71573623701",
  appId: "1:71573623701:web:2c9f7e636651522575dc9c",
  measurementId: "G-ETFB8D5WR3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// App-level configuration
const ADMIN_EMAIL = 'gabrielshawstopmotion@gmail.com';

export { app, auth, db, provider, signInWithPopup, signOut, onAuthStateChanged, ADMIN_EMAIL };