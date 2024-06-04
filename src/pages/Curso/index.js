import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/Curso.css'

import CardsListG from '../../components/CardsListG';
import CardItemG from '../../components/CardItemG';

const cardsListDados = [
  {
      ImgCapa:"https://ofitexto.vteximg.com.br/arquivos/ids/168086/introducao-engenharia-abordagem-baseada-ensino-por-competencias.jpg?v=637848711881170000",
      alt:"ntrodução à engenharia",
      Titulo:"ntrodução à engenharia",
      Desc:"As competências socioemocionais na Engenharia. Com videoaulas e planos de aula para professores, este livro aborda..",
      href:"/Livro",
  },
  {
      ImgCapa:"https://d1onnvmvleiz1u.cloudfront.net/documentos/ebook_imagem/1945/conversions/Capa-site-Engenharia-de-computa%C3%A7%C3%A3o--conceitos-fundamentais-e-aplica%C3%A7%C3%B5es-pr%C3%A1ticas-optimized.webp",
      alt:"Engenharia de computação",
      Titulo:"Engenharia de computação",
      Desc:"A engenharia de computação aplica os princípios da ciência da computação, matemática e engenharia",
      href:"/Livro",
  },
  {
      ImgCapa:"https://ofitexto.vteximg.com.br/arquivos/ids/167838/desconstrucao-vistoria-inspecao-engenharia-civil.jpg?v=637734798540500000",
      alt:"Desconstrução da vistoria e inspeção",
      Titulo:"Desconstrução da vistoria e inspeção",
      Desc:"Sob vasta experiência no campo de perícia das edificações, a engenheira especialista Priscila Wellttem reúne, neste livro...",
      href:"/Livro",
  },
  {
      ImgCapa:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjw8P9-P522gp7cyO6LzSp_Uvm1kK7dnUKw&s",
      alt:"Obras e Serviços de Engenharia ",
      Titulo:"Obras e Serviços de Engenharia ",
      Desc:"O livro “Obras e Serviços de Engenharia na Nova Lei de Licitações e Contratos Administrativos - novas perspectiva..",
      href:"/Livro",
  },
]

function Curso() { 
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

export default Curso;
