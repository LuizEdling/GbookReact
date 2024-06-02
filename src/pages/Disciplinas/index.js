//Importando arquivo externo CSS
import '../../assets/Disciplinas.css';

//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Importando componente Header e Footer
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function() {
    return (
    <div>
        <Header/>

        {/*<Footer/>*/}
    </div>
    )
}