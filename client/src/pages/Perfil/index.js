import '../Perfil/Perfil.css' // Importando arquivo CSS do perfil
import Header from '../../components/Header'; // Importando o Header
import Footer from '../../components/Footer'; // Importando o Footer

import DadosPerfil from '../../components/DadosPerfil'; // Importando DadosPerfil

//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Perfil(){  
  return(
    <div>
      <Header/>
      <div className='profileContainer'>
        <DadosPerfil/>
      </div>
      <Footer/>
    </div>
    );
}