// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "housifyr-70292.firebaseapp.com",
  projectId: "housifyr-70292",
  storageBucket: "housifyr-70292.firebasestorage.app",
  messagingSenderId: "979957253212",
  appId: "1:979957253212:web:90c1f550c3f11968a6d299",
  measurementId: "G-F6N5C86TWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);