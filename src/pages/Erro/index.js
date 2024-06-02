import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // importa o bootstrap
import '../../assets/Erro.css'; // Importando o css 
import error404 from '../../assets/images/error404.png'; // importa a imagem de erro
import { Link } from 'react-router-dom'; // pra poder usar a tag <LInk>


const Erro = () => {
  return (
    <div className="container text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
      <img className="error img-fluid-max" src={error404} alt="Error 404" />
      <Link to="/Home" className="btn btn-primary btn-lg mb-0">Voltar para a Home</Link>
    </div>
  );
};

export default Erro;
