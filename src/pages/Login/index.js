import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; 

//Firebase
import { auth } from '../../firebase/firebaseConnection';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

//Imagens
import GBLogo from '../../assets/images/login/LogoMin.png';
import mascote from '../../assets/images/login/mascote.png';


export default function TestLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const navigate = useNavigate();

  async function loginSubmit(event) {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        setEmail("");
        setSenha("");
        navigate('/Home');
      })
      .catch((error) => {
        setErroLogin(true);
      });
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // O usuário foi autenticado com sucesso
        const user = result.user;
        console.log("Usuário logado com Google: ", user);
        navigate('/Home'); // Navega para a página principal após o login
      })
      .catch((error) => {
        console.error("Erro ao autenticar com Google: ", error);
        setErroLogin(true);
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
              <h3 id="alert">Credenciais incorretas!</h3>
            </div>
          )}

          <button type="submit">Entrar</button>
          <button type="button" onClick={loginWithGoogle}>Entrar com Gmail</button> {/* Botão para login com Google */}
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
