import React from "react"; 
import '../DadosPerfil/DadosPerfil.css'; // Importando DadosPerfil 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

export default function DadosPerfil(){
  const isProfessor = JSON.parse(localStorage.getItem('UserProfessor')); // Recupera o estado do usuário
  const nome = isProfessor ? "Professor" : "Aluno";
  
  return (
    <div id="info-aluno">
      <div className="text-center texto-branco">
        <img src={require('../../assets/images/perfil-semfoto.jpg')} alt="Foto do Usuário" id="foto-aluno" width="150" />
        <h2>{nome}</h2>
        <p>Centro Universitário Campo Real</p>
      </div>
    </div>
  );
}
