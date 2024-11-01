import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header'; // importa o Header
import Footer from '../../components/Footer'; //importa o Footer

import '../PageDisciplinas/PageDisciplinas.css';  // importa o CSS

import CardsListG from '../../components/CardsListG'; // importa o CardsListG
import CardItemG from '../../components/CardItemG'; // importa o CardsItemG

// define a const cardListdados
const cardsListDados = [
  // cria um array para cada objeto
  {
      ImgCapa:"https://m.media-amazon.com/images/I/41GTBwfv0TL._SY445_SX342_.jpg",
      alt:"Engenharia de Software Moderna",
      Titulo:"Engenharia de Software Moderna",
      Desc:"Engenharia de Software Moderna...",
      href:"/Livro",
  },
  {
      ImgCapa:"https://m.media-amazon.com/images/I/413RVBFxTRL._SY445_SX342_.jpg",
      alt:"Fundamentos da arquitetura de Software",
      Titulo:"Fundamentos da arquitetura de Software",
      Desc:"A narrativa é passada na aldeia fictícia de Macondo e segue várias gerações da família Buendía–Iguarána",
      href:"/Livro",
  },
  {
      ImgCapa:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-LRil1jNo_MvXNDjqEyfOcMcdbuWrZWyTg&s",
      alt:"O universo da programação",
      Titulo:"O universo da programação",
      Desc:"Desenvolvimento de software não é mais somente uma área de trabalho, mas um verdadeiro ..",
      href:"/Livro",
  },
  {
      ImgCapa:"https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg",
      alt:"Domain-Driven Design",
      Titulo:"Domain-Driven Design",
      Desc:"Este livro, assim como o Padrões de Arquitetura, vai te dar outra visão sobre desenvolvimento de software.",
      href:"/Livro",
  },
]

// define o componente pageDisciplinas
function PageDisciplinas() {  
  //usa um hook "useParams" para pegar o parametro title de URL "  
  const { title } = useParams();

  return (
    <>
      <Header/>
      <div className="divider"></div>
      
      {/* exibe o valor do parametro*/}
      <div className='titulo'>
        <h1>{title}</h1>
      </div>

      {/* pega os dados inseridos no array acima e exibe */}   
      <CardsListG> {     
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

export default PageDisciplinas;
