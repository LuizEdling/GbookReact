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
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 1",
        Titulo:"Livro 1",
        Desc:"Descrição do livro 1",
        href:"/Livro",
    },
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 2",
        Titulo:"Livro 2",
        Desc:"Descrição do livro 2",
        href:"/Livro",
    },
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 3",
        Titulo:"Livro 3",
        Desc:"Descrição do livro 3",
        href:"/Livro",
    },
    {
        ImgCapa:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        alt:"Livro 4",
        Titulo:"Livro 4",
        Desc:"Descrição do livro 4",
        href:"/Livro",
    },
]

const histList = [
    {
        capaLivro:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        nomeLivro:"Livro 1",
    },
    {
        capaLivro:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        nomeLivro:"Livro 2",
    },
    {
        capaLivro:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        nomeLivro:"Livro 3",
    },
    {
        capaLivro:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        nomeLivro:"Livro 4",
    },
    {
        capaLivro:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        nomeLivro:"Livro 4",
    },
    {
        capaLivro:"https://img.freepik.com/vetores-gratis/vazio-livro-realista-mockup-modelo-vetorial_1017-9207.jpg?w=740&t=st=1717417918~exp=1717418518~hmac=373ee0b0dea1ba5df1fbf387686d934f3ddb21f71797c74ed5359eed3f84d1c9",
        nomeLivro:"Livro 4",
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