// DEIXA A API ABERTA MESMO (É SÓ PELO TRABALHO!!)
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SMohrJwzpgUXaSyQXU0lzty3ksd2R7U",
  authDomain: "mercadoverde-fa7b4.firebaseapp.com",
  projectId: "mercadoverde-fa7b4",
  storageBucket: "mercadoverde-fa7b4.appspot.com",
  messagingSenderId: "351950482001",
  appId: "1:351950482001:web:9e84a2fcc5e73047b4a670"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
