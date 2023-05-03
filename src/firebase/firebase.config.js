// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwU161LLeIqJVtGkYqBc_mi57-HT-iaGY",
  authDomain: "culinary-chronicles-auth.firebaseapp.com",
  projectId: "culinary-chronicles-auth",
  storageBucket: "culinary-chronicles-auth.appspot.com",
  messagingSenderId: "148833231462",
  appId: "1:148833231462:web:22250f82b592555115c3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app