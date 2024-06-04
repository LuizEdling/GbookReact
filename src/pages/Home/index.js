//Importando arquivo externo CSS
import '../../assets/Home.css';

//importando o {Link}
import { Link } from 'react-router-dom';

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

//Importando listagem de cards
import CardsListG from '../../components/CardsListG';
import CardItemG from '../../components/CardItemG';
//Dicionário para os cards
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
            
            <div id="MaisAcessados">
            <CardsListG titulo="Mais Acessados">  
                {
                    cardsList.map(function(item) {
                        return(
                            <CardItemG
                                ImgCapa={item.ImgCapa}
                                alt={item.alt}
                                Titulo={item.Titulo}
                                Desc={item.Desc}
                                href={item.href}
                            />
                        )
                    })
                }
            </CardsListG>
            </div>

            <div id="resenhas-livros" class="bg-dark text-white py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resenhas de Livros</h2>
                    <div class="row g-4">
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://cdn.culturagenial.com/imagens/as-mil-e-uma-noites-cke.jpg" class="card-img-top" alt="Livro 1"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">As Mil e uma Noites</h5>
                                    <p class="card-text">Originárias do sul indiano e do médio oriente, As Mil e Uma Noites reúnem histórias do folclore...</p>
                                    <Link to="/Livro" className="btn btn-primary mt-auto">Leia mais</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://www.revistabula.com/wp/wp-content/uploads/2020/03/Hamlet.jpg.webp" class="card-img-top" alt="Livro 2"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Hamlet</h5>
                                    <p class="card-text">O Rei Hamlet de Dinamarca acaba de morrer, deixando seu filho, o Príncipe Hamlet, e a viúva Rainha Gertrudes...</p>
                                    <Link to="/Livro" className="btn btn-primary mt-auto">Leia mais</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-o-pequeno-principe-cke.jpg" class="card-img-top" alt="Livro 3"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">O Pequeno Príncipe</h5>
                                    <p class="card-text">Esse livro vale tanto pelas palavras quanto pelas ilustrações. Embora seja (oficialmente) um livro infantil</p>
                                    <Link to="/Livro" className="btn btn-primary mt-auto">Leia mais</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://cdn.maioresemelhores.com/imagens/mm-livros-para-ler-antes-de-morrer-vidas-secas.jpg" class="card-img-top" alt="Livro 4"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Vidas Secas</h5>
                                    <p class="card-text">"Vidas Secas", um dos maiores tesouros da literatura brasileira, mergulha com maestria no universo...</p>
                                    <Link to="/Livro" className="btn btn-primary mt-auto">Leia mais</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-eu-robo-cke.jpg" class="card-img-top" alt="Livro 5"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Eu, Robô</h5>
                                    <p class="card-text">E se toda inteligência artificial fosse programada com 3 leis para proteger a humanidade? Essa é a ideia...</p>
                                    <Link to="/Livro" className="btn btn-primary mt-auto">Leia mais</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-a-redoma-de-vidro-cke.jpg" class="card-img-top" alt="Livro 6"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">A Redoma de Vidro</h5>
                                    <p class="card-text">Uma das maiores poetisas de todos os tempos, Sylvia Plath lançou A Redoma de Vidro em 1963. </p>
                                    <Link to="/Livro" className="btn btn-primary mt-auto">Leia mais</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="divider"></div>

            <Footer/>
        </div>
    );
}