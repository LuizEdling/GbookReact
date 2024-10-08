import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstra
import '../Footer/Footer.css'; // Importando Footer

import { Link } from 'react-router-dom';

import github from '../../assets/images/footer/github.png';
import instagram from '../../assets/images/footer/instagram.png';
import email from '../../assets/images/footer/email.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/LuizEdling/AtividadeFinal" target="_blank">
            <img src={github} alt="Github" />
          </a>

          <a href="https://www.instagram.com/gbookcr/" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>

          <a href="mailto:gbooks2024@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
        <p>&copy; 2024 GBook. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};