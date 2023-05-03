// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDwU161LLeIqJVtGkYqBc_mi57-HT-iaGY",
  // authDomain: "culinary-chronicles-auth.firebaseapp.com",
  // projectId: "culinary-chronicles-auth",
  // storageBucket: "culinary-chronicles-auth.appspot.com",
  // messagingSenderId: "148833231462",
  // appId: "1:148833231462:web:22250f82b592555115c3a7"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app