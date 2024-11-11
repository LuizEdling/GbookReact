import '../Home/Home.css';

//Header e Footer
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//Componentes
import HomeCarrossel from '../../components/HomeCarrossel';
import HomeListaLivros from '../../components/HomeListaLivros';

//Importando imagens dos slides
import slide1 from '../../assets/images/carousel/primeiro_slide.png';
import slide2 from '../../assets/images/carousel/segundo_slide.png';
import slide3 from '../../assets/images/carousel/terceiro.png';


export default function Home() {
  return (
    <div>
      <Header/>

      <div id="Carrossel">
        <HomeCarrossel
          slide1 = {slide1}
          alt1 = "Convite para clube do livro"
          slide2 = {slide2}
          alt2 = "Livro destaque semanal"
          slide3 = {slide3}
          alt3 = "Acesse o instagram da página: @GBOOKS"
        />
      </div>

      <div id="AdicionadosRecentemente">
        <HomeListaLivros 
          tituloSecao="Adicionados recentemente" 
        />
      </div>

      <div id="MaisAcessados">
        <HomeListaLivros 
          tituloSecao="Mais acessados" 
        />
      </div>

      <Footer/>
    </div>
  );
}