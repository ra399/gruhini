// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaK3nWF2Lvyf8JwsF3WkQjs5HcaAuRNvY",
  authDomain: "gruhini-efac0.firebaseapp.com",
  projectId: "gruhini-efac0",
  storageBucket: "gruhini-efac0.appspot.com",
  messagingSenderId: "692630689537",
  appId: "1:692630689537:web:2fbb3a02d5c36c17abed00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();