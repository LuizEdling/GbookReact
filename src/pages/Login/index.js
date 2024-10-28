import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; 

//Firebase
import { auth } from '../../firebase/firebaseConnection';
import {  signInWithEmailAndPassword } from 'firebase/auth';

//Imagens
import GBLogo from '../../assets/images/login/LogoMin.png';
import mascote from '../../assets/images/login/mascote.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const navigate = useNavigate();

  async function loginSubmit(event) {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setEmail("");
        setSenha("");
        navigate('/Home');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setErroLogin("Usuário não encontrado!");
        } else if (error.code === 'auth/wrong-password') {
          setErroLogin("Senha incorreta!");
        }
      });
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
              <h3 id="alert">{erroLogin}</h3>
            </div>
          )}

          

          <button type="submit">Entrar</button>
        </form>
      </div>

      <div className="loginImg">
        <img 
          src={mascote} 
          alt="Boneco GBook"
        />
      </div>
    </div>
  );
}
