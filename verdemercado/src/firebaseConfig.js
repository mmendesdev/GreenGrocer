// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD6SMohrJwzpgUXaSyQXU0lzty3ksd2R7U",
    authDomain: "mercadoverde-fa7b4.firebaseapp.com",
    projectId: "mercadoverde-fa7b4",
    storageBucket: "mercadoverde-fa7b4.appspot.com",
    messagingSenderId: "351950482001",
    appId: "1:351950482001:web:9e84a2fcc5e73047b4a670"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };