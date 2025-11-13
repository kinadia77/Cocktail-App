// src/firebase/config.js

// ✅ Importa las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔐 Configuración de Firebase (tu configuración real)
const firebaseConfig = {
    apiKey: "AIzaSyDxsT-KmTYMa5WpAFPjsvK2hRGKoudQa1E",
    authDomain: "cocktailapp-2c09d.firebaseapp.com",
    projectId: "cocktailapp-2c09d",
    storageBucket: "cocktailapp-2c09d.firebasestorage.app",
    messagingSenderId: "682303422115",
    appId: "1:682303422115:web:e92dcb981bddde5b8f8916",
};

// 🚀 Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 🔑 Exporta la autenticación y la base de datos Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

