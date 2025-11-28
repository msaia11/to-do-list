// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFkoKuJjGcx_JyiQjzPbbwzjQRWl0XH0M",
  authDomain: "my-goals-bd293.firebaseapp.com",
  projectId: "my-goals-bd293",
  storageBucket: "my-goals-bd293.firebasestorage.app",
  messagingSenderId: "665039108160",
  appId: "1:665039108160:web:24df88bf946330f66ac7a5",
  measurementId: "G-0FK20N1E86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db