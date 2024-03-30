// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-2fcd5.firebaseapp.com",
    projectId: "mern-estate-2fcd5",
    storageBucket: "mern-estate-2fcd5.appspot.com",
    messagingSenderId: "1038574161248",
    appId: "1:1038574161248:web:33fbeb5f55c523c0266205"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);