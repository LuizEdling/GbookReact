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

//Importando listagem de cards
import CardsListG from '../../components/CardsListG';
import CardItemG from '../../components/CardItemG';
//Dicionário para os cards
const cardsList = [
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 1",
        Titulo:"Livro 1",
        Desc:"Descrição do livro 1",
        href:"#",
    },
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 2",
        Titulo:"Livro 2",
        Desc:"Descrição do livro 2",
        href:"#",
    },
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 3",
        Titulo:"Livro 3",
        Desc:"Descrição do livro 3",
        href:"#",
    },
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 4",
        Titulo:"Livro 4",
        Desc:"Descrição do livro 4",
        href:"#",
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
                                <img src="https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9" class="card-img-top" alt="Livro 1"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 1</h5>
                                    <p class="card-text">Resenha do livro 1</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9" class="card-img-top" alt="Livro 2"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 2</h5>
                                    <p class="card-text">Resenha do livro 2</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9" class="card-img-top" alt="Livro 3"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 3</h5>
                                    <p class="card-text">Resenha do livro 3</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9" class="card-img-top" alt="Livro 4"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 4</h5>
                                    <p class="card-text">Resenha do livro 4</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9" class="card-img-top" alt="Livro 5"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 5</h5>
                                    <p class="card-text">Resenha do livro 5</p>
                                    <a href="#" class="btn btn-primary mt-auto">Leia mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="card h-100 bg-secondary text-white">
                                <img src="https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9" class="card-img-top" alt="Livro 6"/>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Nome do Livro 6</h5>
                                    <p class="card-text">Resenha do livro 6</p>
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