import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuração base Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByT6UCgQzo2vwCK8M6W39v8YzDylvTXqM",
  authDomain: "gbookcr.firebaseapp.com",
  projectId: "gbookcr",
  storageBucket: "gbookcr.appspot.com",
  messagingSenderId: "1095467536428",
  appId: "1:1095467536428:web:cf960ecaf3f6c5923dc189"
};

// Iniciando Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Exportando os serviçoes necessários para o resto do projeto
export { app, db, auth };