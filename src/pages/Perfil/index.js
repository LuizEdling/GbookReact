import '../../assets/Perfil.css' // Importando arquivo CSS do perfil
import Header from '../../components/Header'; // Importando o Header
import Footer from '../../components/Footer'; // Importando o Footer

import DadosPerfil from '../../components/DadosPerfil'; // Importando DadosPerfil

//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importando listagem dos cards
import CardsListG from '../../components/CardsListG';
import CardItemG from '../../components/CardItemG';
import CardsListP from '../../components/CardsListP';
import CardItemP from '../../components/CardItemP';

const cardsListDados = [
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
    {
        ImgCapa:"https://cdn.culturagenial.com/imagens/o-jogo-da-amarelinha-livro.jpg",
        alt:"O jogo da amarelinha",
        Titulo:"O jogo da amarelinha",
        Desc:"Narra o romance entre um intelectual, Horacio Oliveira, e Maga, uma misteriosa uruguaia.",
        href:"/Livro",
    },
]

const histList = [
    {
        capaLivro:"https://cdn.culturagenial.com/imagens/a-casa-dos-espiritos.jpg",
    },
    {
        capaLivro:"https://cdn.culturagenial.com/imagens/a-hora-da-estrela.jpg",
    },
    {
        capaLivro:"https://www.revistabula.com/wp/wp-content/uploads/2020/03/Hamlet.jpg.webp",

    },
    {
        capaLivro:"https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-o-pequeno-principe-cke.jpg",
    },
    {
        capaLivro:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-LRil1jNo_MvXNDjqEyfOcMcdbuWrZWyTg&s",
    },
    {
        capaLivro:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNk8Z91pXpjH2ai-XNI5AGh0oj2Co1-dfcLQ&s",
    },
]

export default function Perfil(){  
    return(
        <div>
            <Header/>
            <div className="divider"></div>

            <DadosPerfil/>
            
            <CardsListG titulo="Livros Favoritos">  
                {
                    cardsListDados.map(function(item) {
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
            
            <div id="historico" className="container mt-5">
                <CardsListP titulo="Recém acessados">
                    {
                        histList.map(function(item) {
                            return(
                                <CardItemP
                                    capaLivro={item.capaLivro}
                                    nomeLivro={item.nomeLivro}
                                />
                            )
                        })
                    }
                </CardsListP>
            </div>

            <div className='divider'></div>
            <Footer/>
        </div>
    );
}