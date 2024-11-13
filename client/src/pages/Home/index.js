import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeCarrossel from '../../components/HomeCarrossel';
import HomeListaLivros from '../../components/HomeListaLivros';

import slide1 from '../../assets/images/carousel/primeiro_slide.png';
import slide2 from '../../assets/images/carousel/segundo_slide.png';
import slide3 from '../../assets/images/carousel/terceiro.png';

export default function Home() {
  const [livrosRecentes, setLivrosRecentes] = useState([]);
  const [todosLivros, setTodosLivros] = useState([]);

  //Pegar os livros mais recentes
  useEffect(() => {
    fetch('http://localhost:8000/api/books')
      .then(response => response.json())
      .then(data => {
        const sortedBooks = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 15);
        setLivrosRecentes(sortedBooks);
        setTodosLivros(data);
      })
      .catch(error => console.error('Erro ao buscar livros:', error));
  }, []);

  // Função para embaralhar os livros e pegar um número aleatório
  const sortearLivrosAleatorios = (livros, quantidade = 15) => {
    const livrosEmbaralhados = [...livros].sort(() => Math.random() - 0.15);
    return livrosEmbaralhados.slice(0, quantidade);
  };

  return (
    <div>
      <Header />
      <div id="Carrossel">
        <HomeCarrossel
          slide1={slide1}
          alt1="Convite para clube do livro"
          slide2={slide2}
          alt2="Livro destaque semanal"
          slide3={slide3}
          alt3="Acesse o instagram da página: @GBOOKS"
        />
      </div>

      <div id="AdicionadosRecentemente">
        <HomeListaLivros
          tituloSecao="Adicionados recentemente"
          livros={livrosRecentes}
        />
      </div>

      <div id="MaisAcessados">
        <HomeListaLivros
          tituloSecao="Livros em Destaque"
          livros={sortearLivrosAleatorios(todosLivros)}
        />
      </div>

      <Footer />
    </div>
  );
};