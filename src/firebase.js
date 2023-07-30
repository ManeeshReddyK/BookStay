// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhdr_55mZEIg_CnKXa2v6F2o7fQumklKc",
    authDomain: "hotel-8cb67.firebaseapp.com",
    projectId: "hotel-8cb67",
    storageBucket: "hotel-8cb67.appspot.com",
    messagingSenderId: "971212723502",
    appId: "1:971212723502:web:a149833eb9d59c04cc96bf",
    measurementId: "G-T5NZP7Y3WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);