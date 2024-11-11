import { Routes, Route } from 'react-router-dom';
import Private from './Private';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Biblioteca from '../pages/Biblioteca';
import Disciplinas from '../pages/Disciplinas';
import Perfil from '../pages/Perfil';
import ResetSenha from '../pages/ResetSenha';

import DisciplinaInfo from '../pages/DisciplinaInfo';
import Livro from '../pages/Livro';

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

      <Route path="/DisciplinaInfo/:subjectId" element={<Private> <DisciplinaInfo /> </Private>} />
      <Route path="/Livro/:bookId" element={<Private> <Livro /> </Private>} />

      <Route path="*" element={<Erro />} />
    </Routes>
  );
}
