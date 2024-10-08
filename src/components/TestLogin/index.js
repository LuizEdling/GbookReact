import React from "react";

import GBLogo from '../../assets/images/GBOOK_LOGO2.png'
import { Link } from "react-router-dom";

export default function TestLogin(){
  return (
    <div className="LoginContainer">
      <div className="loginForm">
        <img src={GBLogo}></img>
        <h1>Bem vindo de volta!</h1>
        <h3>Por favor, insira seus dados</h3>
        
        <form>
          <input placeholder="Login"></input>
          <input placeholder="Senha"></input>
          <a href="#">Esqueceu a senha?</a>
          <button><b>Entrar</b></button>
          <Link to="#">Entrar com Gmail</Link>
        </form>
      </div>
      <div className="loginImg">
        
      </div>
    </div>
)}