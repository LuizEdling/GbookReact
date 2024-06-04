import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/pageDisciplinas.css';

import CardsListG from '../../components/CardsListG';
import CardItemG from '../../components/CardItemG';

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

function PageDisciplinas() { // Renomeie para PageDisciplinas com letra maiúscula
  const { title } = useParams();

  return (
    <>
      <Header/>
      <div className="divider"></div>
      
      <div className='titulo'>
        <h1>{title}</h1>
      </div>

      <CardsListG>  
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

      <div className="divider"></div>
      <Footer/>
    </>    
  );
}

export default PageDisciplinas; // Exporte PageDisciplinas corretamente
