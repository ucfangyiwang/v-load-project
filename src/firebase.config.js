// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvuCMFL0mkJ7PASuU5Z8XZWHBkWbJPHiA",
  authDomain: "v-load-d71c6.firebaseapp.com",
  projectId: "v-load-d71c6",
  storageBucket: "v-load-d71c6.appspot.com",
  messagingSenderId: "1080045226497",
  appId: "1:1080045226497:web:244efddefafc1340ffce00",
  measurementId: "G-PHCHCBFN6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore;
