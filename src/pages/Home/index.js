//Importando arquivo externo CSS
import '../Home/Home.css';

//Importando a função Link
//import { Link } from 'react-router-dom';

//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Importando componente Header e Footer
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//Importando imagens dos slides
import slide1 from '../../assets/images/carousel/primeiro_slide.png';
import slide2 from '../../assets/images/carousel/segundo_slide.png';
import slide3 from '../../assets/images/carousel/terceiro.png';


import HomeListaAutores from '../../components/HomeListaAutores';
import HomeListaLivros from '../../components/HomeListaLivros';

//ALTERAR PARA UMA API !!!!!
//Dicionário para os cards
/*
const cardsList = [
    {
        ImgCapa:"https://cdn.culturagenial.com/imagens/1984-orwell-cke.jpg",
        alt:"1984",
        Titulo:"1984",
        Desc:"A história é passada em um mundo em guerra e vigilância constantes, onde um regime...",
        href:"/Livro",
    },
    {
        ImgCapa:"https://cdn.culturagenial.com/imagens/a-casa-dos-espiritos.jpg",
        alt:"A casa dos espíritos",
        Titulo:"A casa dos espíritos",
        Desc:"É acompanhando os integrantes da família Trueba que mergulhamos em três...",
        href:"/Livro",
    },
    {
        ImgCapa:"https://cdn.culturagenial.com/imagens/moby-dick-cke.jpg",
        alt:"Moby Dick",
        Titulo:"Moby Dick",
        Desc:"Passado no mar, o livro conta a história de um navio baleeiro que persegue...",
        href:"/Livro",
    },
    {
        ImgCapa:"https://cdn.culturagenial.com/imagens/a-hora-da-estrela.jpg",
        alt:"A hora da estrela",
        Titulo:"A hora da estrela",
        Desc:"A trama apresenta Macabéa, uma jovem alagoana que chega no Rio de Janeiro e...",
        href:"/Livro",
    },
]
*/

export default function Home(){
    return(
        <div>
            <Header/>

            <div id="carrossel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                    {/*Define um carrossel com identificação única para referência. 
                    `carousel slide`: cria o efeito de deslize entre itens.
                    `data-bs-ride="carousel"`: inicializa o carrossel automaticamente quando a página é carregada.
                    `data-bs-interval="5000"`: define o intervalo entre os slides para 5 segundos.*/}
                    <div className="carousel-indicators"> {/* Indicadores para navegar entre os slides*/}
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"       aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner"> {/*Container para os slides do carrossel*/}
                        {/*Primeiro item do carrossel; 'active' indica que ele será o primeiro a ser exibido*/}
                        <div className="carousel-item active"> 
                            {/*Imagem do slide; `d-block` e `img-fluid` são usadas para responsividade*/}
                            <img src={slide1} id="primeiroSlide" className="d-block img-fluid carousel-img" alt="Convite para clube do livro"/>
                        </div>
                        <div className="carousel-item">
                            {/*Imagem do slide; `d-block` e `img-fluid` são usadas para responsividade*/}
                            <img src={slide2} id="segundoSlide" className="d-block img-fluid carousel-img" alt="Livro destaque semanal"/>
                        </div>
                        <div className="carousel-item">
                            {/*Imagem do slide; `d-block` e `img-fluid` são usadas para responsividade*/}
                            <img src={slide3} id="terceiroSlide" className="d-block img-fluid carousel-img" alt="Acesse o instagram da página: @GBOOKS"/>
                        </div>
                    </div>

                    {/*Botão de controle para navegar para o slide anterior*/}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        {/*Ícone visual para o botão de navegação anterior*/}
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        {/*Texto alternativo para leitores de tela (não visível visualmente)*/}
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    {/*Botão de controle para navegar para o próximo slide*/}
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        {/*Ícone visual para o botão de navegação seguinte*/}
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        {/*Texto alternativo para leitores de tela (não visível visualmente)*/}
                        <span className="visually-hidden">Próximo</span>
                    </button>
                </div>
            </div>
            
            <div id="Autores">
                <HomeListaAutores tituloSecao="Autores mais acessados"/>
            </div>

            <div id="AdicionadosRecentemente">
                <HomeListaLivros tituloSecao="Adicionados recentemente"/>
            </div>

            <div id="MaisAcessados">
                <HomeListaLivros tituloSecao="Mais acessados"/>
            </div>

            <Footer/>
        </div>
    );
}