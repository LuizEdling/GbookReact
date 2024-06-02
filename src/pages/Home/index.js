import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListagemCards from '../../components/ListagemCards'

export default function Home(){
    return(
        <div>
            <Header/>
            <ListagemCards titulo="Mais Acessados"/>
            <Footer/>
        </div>
    );
}