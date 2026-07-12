// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqUKk_Z17EluQ3EdgoIqs_6uSLHZUjiEE",
  authDomain: "allcear-storage.firebaseapp.com",
  projectId: "allcear-storage",
  storageBucket: "allcear-storage.firebasestorage.app",
  messagingSenderId: "240348898512",
  appId: "1:240348898512:web:523af269623a1ebf7dead5",
  measurementId: "G-342GNEPYD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
