// arrumar imagens do carrossel
// alterar dois campos seguintes
// criar carrossel com imagens dos livros mais simplficado, estilo darkside 

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação
import '../../assets/Login.css'; // Arquivo CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import logoGbook from '../../assets/images/GBOOK_LOGO2.png'; // Logo GBook

export default function Login() {
  const navigate = useNavigate(); // Hook para navegação programática

  // Função para verificar o login
  function handleSubmit(event) {
    event.preventDefault();

    const login = document.getElementById('document').value;
    const senha = document.getElementById('password').value;

    if (login === 'loginaluno@gmail.com' && senha === 'abc123') {
      localStorage.setItem('UserProfessor', 'false'); // Armazena o estado do usuário
      navigate('/Home');
    } else if (login === 'loginprofessor@gmail.com' && senha === '123abc') {
      localStorage.setItem('UserProfessor', 'true'); // Armazena o estado do usuário
      navigate('/Home');
    } else {
      if (login !== 'loginaluno@gmail.com' && login !== 'loginprofessor@gmail.com') {
        document.querySelector(".errorMessageLogin").style.display = 'block';
      } else {
        document.querySelector(".errorMessageLogin").style.display = 'none';
      }

      if (senha !== 'abc123' && senha !== '123abc') {
        document.querySelector(".errorMessagePassword").style.display = 'block';
      } else {
        document.querySelector(".errorMessagePassword").style.display = 'none';
      }
    }
  }

  return (
    // Iniciando bloco geral
    <div id="bloco_login">
      {/* Div para mostra da imagem direita da tela */}
      <div id="imagem"></div>

      {/* Iniciando bloco do login em si */}
      <div id="login"> 
        {/* Logo GBook */}
        <h2 id="logo">
          <img src={logoGbook} alt="Logo GBook" className="img-fluid" />
        </h2>

        {/* Form para coleta de dados */}
        <div id="loginDocument">
          <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="document" id="labelDocument" className="amarelo">Login</label>
            <br />

            <div className="input-group" id="input-group">
              <input type="text" id="document" className="form-control" placeholder="Digite seu login..." required />
            </div>

            <p className="errorMessageLogin" style={{ display: 'none' }}>Login Incorreto!</p>
            <br />
            <label htmlFor="password" id="labelPassword" className="amarelo">Senha</label>
            <br />

            <div className="input-group" id="input-group">
              <input type="password" id="password" className="form-control" placeholder="Digite sua senha..." required />
            </div>

            <p className="errorMessagePassword" style={{ display: 'none' }}>Senha Incorreta!</p>
            <br />

            <div className="input-group" id="input-group">
              <input type="submit" value="Enviar" id="submit" className="form-control" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
