import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando o Link do React Router
import '../../assets/Header.css'; // Importando o css do Header
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap
import logo from '../../assets/images/logo-gbook.png'; // Importando a logo

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                    <div className="logo">
                        <Link className="navbar-brand" to="/">
                            <img id="logoImage" src={logo} alt="logo-gbook" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link pagina-atual" aria-current="page" to="/home">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/disciplinas">Disciplinas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/biblioteca">Biblioteca</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/perfil">Perfil</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 form-control-lg" type="search" placeholder="Pesquisar livro" aria-label="Search" />
                            <button className="btn btn-outline-success cor-barra-busca" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
