import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Biblioteca from './pages/Biblioteca';
import Disciplinas from './pages/Disciplinas';
import Perfil from './pages/Perfil';
import ResetSenha from './pages/ResetSenha';

import Curso from './pages/Curso';
import PageDisciplinas from './pages/PageDisciplinas'; 
import Livro from './pages/Livro';

import Erro from './pages/Erro';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/ResetSenha" element={<ResetSenha/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Biblioteca" element={<Biblioteca/>}/>
                <Route path="/Disciplinas" element={<Disciplinas/>}/>
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="/Curso/:title" element={<Curso/>}/>
                <Route path="/pageDisciplinas/:title" element={<PageDisciplinas/>}/>
                <Route path="/Livro" element={<Livro />} />
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}
