import React, { useState } from 'react';
import '../../assets/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo-gbook.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="logo">
                        <img id="logoImage" src={logo} alt="logo-gbook" />
                    </div>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link pagina-atual" aria-current="page" href="#home">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#disciplinas">Disciplinas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#biblioteca">Biblioteca</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#perfil">Perfil</a>
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
