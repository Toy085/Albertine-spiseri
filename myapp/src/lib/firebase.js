// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaLZn7M5hsFySfDJlZAmTrkPFFnpmUEyg",
  authDomain: "albertine-spiseri.firebaseapp.com",
  projectId: "albertine-spiseri",
  storageBucket: "albertine-spiseri.firebasestorage.app",
  messagingSenderId: "747893376573",
  appId: "1:747893376573:web:d65a1664a1e014f7b18c54",
  measurementId: "G-DJGDYQ5S4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}