import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Biblioteca from '../pages/Biblioteca';
import Disciplinas from '../pages/Disciplinas';
import Perfil from '../pages/Perfil';
import ResetSenha from '../pages/ResetSenha';

import Curso from '../pages/Curso';
import DisciplinaInfo from '../pages/DisciplinaInfo';
import Livro from '../pages/Livro';

import Erro from '../pages/Erro';

import Private from './Private';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ResetSenha" element={<ResetSenha />} />

      <Route path="/home" element={<Private> <Home /> </Private>} />
      <Route path="/biblioteca" element={<Private> <Biblioteca /> </Private>} />
      <Route path="/disciplinas" element={<Private> <Disciplinas /> </Private>} />
      <Route path="/perfil" element={<Private> <Perfil /> </Private>} />

      <Route path="/curso/:title" element={<Private> <Curso /> </Private>} />
      <Route path="/DisciplinaInfo/:title" element={<Private> <DisciplinaInfo /> </Private>} />
      <Route path="/Livro" element={<Private> <Livro /> </Private>} />

      <Route path="*" element={<Erro />} />
    </Routes>
  );
}
