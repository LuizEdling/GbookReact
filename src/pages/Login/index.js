import React from "react";
import './Login.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

import { auth , updatePassword } from '../../firebase/firebaseConnection';

import {
  signInWithEmailAndPassword
} from 'firebase/auth'

import GBLogo from '../../assets/images/login/LogoMin.png'
import mascote from '../../assets/images/login/mascote.png';

export default function TestLogin(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  //const [DetalhesUsuario, setDetalhesUsuario] = useState("");

  const navigate = useNavigate()

  async function loginSubmit(event){
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, senha)
    .then(
      (value)=>{
        /*
        setDetalhesUsuario({
          id: value.user.id,
          email: value.user.email,
        })
        */
        setEmail("");
        setSenha("");
        setErroLogin(false);
        navigate('/Home');
      }
    ).catch((error)=>{
      setErroLogin(true);
    })
  }

  return (
    <div className="LoginContainer">
      <div className="loginForm">
        <img 
          src={GBLogo} 
          alt="Logo minimalista GBook"
        />
        <h1>Bem vindo de volta!</h1>
        <h3>Por favor, insira seus dados</h3>

        <form onSubmit={loginSubmit}>
          <input 
            type="email"
            placeholder="Login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <Link to="/ResetSenha" id="esqueceuSenha">Esqueceu a senha?</Link>
          
          {erroLogin && (
            <div>
              <h3 id="alert">Credenciais incorretas!</h3>
            </div>
          )}

          <button type="submit">Entrar</button>
          <a href="#">Entrar com Gmail</a>
        </form>
      </div>

      <div className="loginImg">
        <img 
          src={mascote} 
          alt="Boneco GBook"
        />
      </div>
    </div>
)};