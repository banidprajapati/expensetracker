// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoSUCIbTHrwetW0olgZ_YKFMfvWi8yJuI",
  authDomain: "cs022-banidprajapati.firebaseapp.com",
  projectId: "cs022-banidprajapati",
  storageBucket: "cs022-banidprajapati.appspot.com",
  messagingSenderId: "169248507011",
  appId: "1:169248507011:web:e21ecd8835560107d507b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
