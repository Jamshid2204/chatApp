// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTaGRrwR7MgWt7npnCMIGCnxenhLSv0B0",
    authDomain: "chatapp-a5568.firebaseapp.com",
    projectId: "chatapp-a5568",
    storageBucket: "chatapp-a5568.appspot.com",
    messagingSenderId: "793562196969",
    appId: "1:793562196969:web:a2d5a2e168fdaf1052f978",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();