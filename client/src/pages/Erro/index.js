import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Erro/Erro.css'; 
import { Link } from 'react-router-dom';
import error404 from '../../assets/images/error404.png';

export default function Erro (){
  return (
    <div className="container text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
      <img className="error img-fluid-max" src={error404} alt="Error 404" />
      <Link to="/Home" className="btn btn-primary btn-lg mb-0">Voltar para a Home</Link>
    </div>
  );
}