import { useState, createContext, useEffect } from 'react';
import { auth, db } from '../config/firebaseConnection';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  //Função para pegar dados do usuário
  useEffect(() => {
    async function loadUser(){
      const storageUser = localStorage.getItem('@ticketsPRO')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }

      setLoading(false);

    }

    loadUser();
  }, [])

  //Função de Login
  async function signIn(email, password){
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then( async (value) => {
      let uid = value.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());

      let data = {
        uid: uid,
        nome: docSnap.data().nome,
        email: value.user.email,
        avatarUrl: docSnap.data().avatarUrl,
        instituicao: docSnap.data().instituicao,
        curso: docSnap.data().curso,
        subjects: docSnap.data().subjects,
        user_type: docSnap.data().user_type
      }
      console.log(data)

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success("Bem-vindo(a)!")
      navigate("/Home")
    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
      if (error.code === 'auth/user-not-found') {
        toast.error("Usuário não encontrado!");
      } else if (error.code === 'auth/wrong-password') {
        toast.error("Senha incorreta!");
      } else {
        toast.error("Algo deu errado!");
      }
    }) 

  }

  //Função para armazenar dados do usuário
  function storageUser(data){
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }

  //Função para LogOut
  async function logout(){
    await signOut(auth);
    localStorage.removeItem('@ticketsPRO');
    setUser(null);
    toast.info("Você foi desconectado!");
  }

  return(
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        signIn,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}