import { useState, useContext } from "react";
import './Login.css';

import { AuthContext } from "../../context/auth";
import { Link } from 'react-router-dom'; 

//Imagens
import GBLogo from '../../assets/images/login/LogoMin.png';
import mascote from '../../assets/images/login/mascote.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);

  async function loginSubmit(e) {
    e.preventDefault();
    if (email !== '' && password !== ""){
      await signIn(email, password);
    }
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Link to="/ResetSenha" id="esqueceuSenha">Esqueceu a senha?</Link>

          <button type="submit">
            {loadingAuth ? "Carregando.." : "Acessar"}
          </button>
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
