import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCg0E10a5TX5o_T3LK29-Mhois1IHQjThM",
    authDomain: "store-db96.firebaseapp.com",
    projectId: "store-db96",
    storageBucket: "store-db96.firebasestorage.app",
    messagingSenderId: "941957662946",
    appId: "1:941957662946:web:a70bad0358dc0434cd76bb",
    measurementId: "G-RKTLL2P9GH"
};

const app = initializeApp(firebaseConfig);

export const  db = getDatabase(app);
export const auth = getAuth(app);

