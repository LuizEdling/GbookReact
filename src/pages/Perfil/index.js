import Header from '../../components/Header'; // Importando o Header
import Footer from '../../components/Footer'; // Importando o Footer
import ListagemCards from '../../components/ListagemCards'; // Importando as listagens
import ListagemCardsPequenos from '../../components/ListagemCardsPequenos';
import DadosPerfil from '../../components/DadosPerfil'; // Importando DadosPerfil
import '../../assets/Perfil.css' // Importando arquivo CSS do perfil

export default function Home(){
    return(
        <div>
            <Header/>
            <div className="divider"></div>
            <DadosPerfil Tipo="Aluno" Faculdade="Faculdade: Centro Universitario Campo Real" />
            <ListagemCards titulo="Livros favoritos"/>
            <ListagemCardsPequenos Titulo="Recém acessados"/>
            <div className='divider'></div>
            <Footer/>
        </div>
    );
}