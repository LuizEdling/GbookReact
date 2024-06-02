import React from "react"; 
import '../../assets/DadosPerfil.css'; // Importando DadosPerfil 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

const DadosPerfil = ({Tipo, Faculdade}) => {

    return(
        <section id="info-aluno">
            <div className="text-center texto-branco">
                <img src={require('../../assets/images/perfil-semfoto.jpg')} alt="Foto do Usuário" id="foto-aluno" width="150" />
                <h2>{Tipo}</h2>
                <p>{Faculdade}</p>
            </div>
        </section>
    );
};

export default DadosPerfil;
