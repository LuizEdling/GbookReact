import React, { useState } from "react";
import './ResetSenha.css';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; 

import GBLogo from '../../assets/images/login/LogoMin.png';

export default function ResetSenha() {
  const [email, setEmail] = useState("");
  const [emailInvalido, setEmailInvalido] = useState(""); 
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [loading, setLoading] = useState(false); 

  async function resetSubmit(event) {
    event.preventDefault();
    setLoading(true); 

    const auth = getAuth();
  
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setMensagemSucesso("Email de redefinição de senha enviado com sucesso!");
      setEmailInvalido("");
    })
    .catch((error) => {
      setMensagemSucesso("");
      if (error.code === "auth/user-not-found") {
        setEmailInvalido("Email não encontrado!");
      } else {
        setEmailInvalido("Ocorreu um erro, tente novamente mais tarde.");
      }
    })
    .finally(() => {
      setTimeout(() => setLoading(false), 3000); 
    });
  }  

  return (
    <div className="ResetContainer">
      <div className="ResetForm">
        <Link to="/">
          <img 
            src={GBLogo} 
            alt="Logo minimalista GBook"
          />
        </Link>
        <h1>Vou te ajudar!</h1>
        <h3>Insira seu email para receber um<br />código e recuperar sua senha</h3>

        <form onSubmit={resetSubmit}>
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          {emailInvalido && (
            <div>
              <h3 id="alert">{emailInvalido}</h3> 
            </div>
          )}

          {mensagemSucesso && (
            <div>
              <h3 id="success">{mensagemSucesso}</h3>
            </div>
          )}
          
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar código"}
          </button>

          {mensagemSucesso &&(
            <div>
             <Link to="/" id="back">Voltar para página de Login</Link>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
