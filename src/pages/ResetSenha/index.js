import React, { useState } from "react";
import './ResetSenha.css';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";  // Importa a função correta

import GBLogo from '../../assets/images/login/LogoMin.png';

export default function TestLogin() {
  const [email, setEmail] = useState("");
  const [emailInvalido, setEmailInvalido] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  
  async function resetSubmit(event) {
    event.preventDefault();

    const auth = getAuth(); 

    try {
      await sendPasswordResetEmail(auth, email)
      setMensagemSucesso("Email de redefinição de senha enviado com sucesso!");
      setEmailInvalido(""); 
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setEmailInvalido(true);
      } else {
        setEmailInvalido(true);
      }
    }
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
              <h3 id="alert">Email inválido!</h3>
            </div>
          )}

          {mensagemSucesso && (
            <div>
              <h3 id="success">{mensagemSucesso}</h3>
            </div>
          )}

          <button type="submit">Enviar código</button>
        </form>
      </div>
    </div>
  );
}