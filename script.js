/*window.onload = loadBookings;*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase.app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa_MwCYh6cyJByTYW0eX0zN_3FaM5ntXM",
  authDomain: "carebridge-8ded3.firebaseapp.com",
  projectId: "carebridge-8ded3",
  storageBucket: "carebridge-8ded3.firebasestorage.app",
  messagingSenderId: "661966779257",
  appId: "1:661966779257:web:cf4f2bf5abc3fa5f6875a8",
  measurementId: "G-HBZHRDKQDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase setup
const db = getDatabase();
const auth = getAuth();

// Signup function
function signUp(name, email, password, role) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save user to database
      set(ref(db, 'users/' + user.uid), {
        name: name,
        email: email,
        role: role
      });
      alert("Signup successful!");
    })
    .catch((error) => {
      console.error(error.message);
    });
}

