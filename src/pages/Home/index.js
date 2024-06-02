//Importando arquivo externo CSS
import '../../assets/Home.css';

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

            {/*LISTAGEM CARDS*/}
            
            <div id="resenhas-livros" class="bg-dark text-white py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resenhas de Livros</h2>
                    <div class="row g-4">
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="../Livros/assets/images/capa-branca.jpg" class="card-img-top" alt="Nome do Livro 1"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 1</h5>
                                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, laborum.</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="../Livros/assets/images/capa-branca.jpg" class="card-img-top" alt="Nome do Livro 2"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 2</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab ullam fuga laudantium non        repudiandae officiis velit cum similique iusto vero soluta, aliquid molestiae tenetur delectus illum est atque      reprehenderit?</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="../Livros/assets/images/capa-branca.jpg" class="card-img-top" alt="Nome do Livro 3"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 3</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minus vel magnam quod, earum       ipsum tempora aliquid. Ipsa, iure ut?</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="../Livros/assets/images/capa-branca.jpg" class="card-img-top" alt="Nome do Livro 4"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 4</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam officia provident magnam      placeat architecto saepe fugit ullam porro voluptatibus.</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="../Livros/assets/images/capa-branca.jpg" class="card-img-top" alt="Nome do Livro 5"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 5</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quaerat eaque sit tempore aliquam      laborum, quibusdam fugit ad sapiente, unde facilis exercitationem aliquid? Eveniet, corrupti!</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="../Livros/assets/images/capa-branca.jpg" class="card-img-top" alt="Nome do Livro 6"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 6</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla rem laboriosam cum amet      error, aperiam nisi ad sint quo laborum soluta, vel, aut dolor asperiores atque cumque. Dolores, nostrum.</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
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