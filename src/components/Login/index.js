import React from 'react';
//Importando arquivo CSS
import '../../assets/Login.css';
//Importando BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Importando logo
import logoGbook from '../../assets/images/GBOOK_LOGO2.png';

function verify() {
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var login = document.getElementById('document').value;
        var senha = document.getElementById('password').value;
        if(login == 'loginaluno@gmail.com' && senha == 'abc123'){
            window.location.assign('/AtividadeFinal/Aluno/Home/home.html');
        }

        if(login == 'loginprofessor@gmail.com' && senha == '123abc'){
            window.location.assign('/AtividadeFinal/Professor/Home/home.html');
        }

        if(login != 'loginaluno@gmail.com' && login != 'loginprofessor@gmail.com'){
            document.querySelector(".errorMessageLogin").style.display = 'block';
        }else{
            document.querySelector(".errorMessageLogin").style.display = 'none';
        }

        if(senha != 'abc123' && senha != '123abc'){
            document.querySelector(".errorMessagePassword").style.display = 'block';
        }else{
            document.querySelector(".errorMessagePassword").style.display = 'none';
        }
    });
});
}


//Iniciando função Login
export default function Login() {
  //FAZER LÓGICA PARA O LOGIN  

  return (
    //Iniciando bloco geral
    <div id="bloco_login">
      {/*Div para mostra da imagem direita da tela*/}
      <div id="imagem"></div>

      {/*Iniciando bloco do login em si*/}
      <div id="login"> 
        {/*Logo GBook*/}
        <h2 id="logo" class="azul">
          <img src={logoGbook} alt="Título da Imagem" class="img-fluid"/>
        </h2>

        {/*Form para coleta de dados*/}
        <div id="loginDocument">
          <form id="form" action={verify} method="post">
            <label for="document" id="labelDocument" class="amarelo">Login</label>
            <br/>

            <div class="input-group" id="input-group" >
              <input type="text" id="document" class="form-control" placeholder="Digite seu login..." required/>
            </div>
            
            <p class="errorMessageLogin">Login Incorreto!</p>
            <br/>
            <label for="password" id="labelPassword" class="amarelo">Senha</label>
            <br/>

            <div class="input-group" id="input-group">
              <input type="password" id="password" class="form-control" placeholder="Digite sua senha..." required/>
            </div>

            <p class="errorMessagePassword">Senha Incorreta!</p>
            <br/>


            <div className="input-group" id="input-group">
              <input type="submit" value="Enviar" id="submit" className="form-control"/>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}