import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importando o Link e useLocation do React Router
import '../Header/Header.css'; // Importando o css do Header
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap
import logo from '../../assets/images/logo-gbook.png'; // Importando a logo

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Hook do React Router para obter a localização atual

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Determina qual link deve ter a classe 'pagina-atual' com base na URL atual
    const getLinkClass = (path) => {
        return location.pathname === path ? 'nav-link pagina-atual' : 'nav-link';
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
                                <Link className={getLinkClass('/Home')} to="/Home">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={getLinkClass('/Disciplinas')} to="/Disciplinas">Disciplinas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={getLinkClass('/Biblioteca')} to="/Biblioteca">Biblioteca</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={getLinkClass('/Perfil')} to="/Perfil">Perfil</Link>
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
