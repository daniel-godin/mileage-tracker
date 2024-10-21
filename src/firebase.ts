// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR6EZsKRAumg3hR-hfuZeBI5bmjxzVbC0",
  authDomain: "mileage-a145a.firebaseapp.com",
  projectId: "mileage-a145a",
  storageBucket: "mileage-a145a.appspot.com",
  messagingSenderId: "687709479761",
  appId: "1:687709479761:web:f57e176694b0ca50e02970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Firebase Emulators:
// Comment these out when you're ready to deploy to prod, or when you want to access prod.
if (location.hostname === 'localhost' || '127.0.0.1') {
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
}