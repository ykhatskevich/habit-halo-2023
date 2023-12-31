// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRSiOQcc1fCLAMfq8cgL1WSuvqEaH1HLc",
  authDomain: "habit-halo-2023.firebaseapp.com",
  databaseURL: "https://habit-halo-2023-default-rtdb.firebaseio.com",
  projectId: "habit-halo-2023",
  storageBucket: "habit-halo-2023.appspot.com",
  messagingSenderId: "26939766075",
  appId: "1:26939766075:web:77bbc46440e4aa12ea731e",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
