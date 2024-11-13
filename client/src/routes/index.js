import { Routes, Route } from 'react-router-dom';
import Private from './Private';

import Login from '../pages/Login';
import ResetSenha from '../pages/ResetSenha';
import Home from '../pages/Home';
import Biblioteca from '../pages/Biblioteca';
import Disciplinas from '../pages/Disciplinas';
import Perfil from '../pages/Perfil';

import LivrosSalvos from '../pages/LivrosSalvos';
import DisciplinaInfo from '../pages/DisciplinaInfo';
import Livro from '../pages/Livro';
import AddLivro from '../pages/AddLivro';
import Procurar from '../pages/Procurar';

import Erro from '../pages/Erro';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ResetSenha" element={<ResetSenha />} />

      <Route path="/Home" element={<Private> <Home /> </Private>} />
      <Route path="/Biblioteca" element={<Private> <Biblioteca /> </Private>} />
      <Route path="/Disciplinas" element={<Private> <Disciplinas /> </Private>} />
      <Route path="/Perfil" element={<Private> <Perfil /> </Private>} />
      <Route path="/LivrosSalvos" element={<Private> <LivrosSalvos /> </Private>} />

      <Route path="/DisciplinaInfo/:subjectId" element={<Private> <DisciplinaInfo /> </Private>} />
      <Route path="/Livro/:bookId" element={<Private> <Livro /> </Private>} />
      <Route path="/Procurar/:searchId" element={<Private> <Procurar /> </Private>} />
      <Route path="/AddLivro" element={<Private requiredType="professor"><AddLivro /></Private>} />

      <Route path="*" element={<Erro />} />
      
    </Routes>
  );
}
