import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login'; // importa a pag de  login
import Biblioteca from './pages/Biblioteca'; //importa a pag de Biblioteca
import Disciplinas from './pages/Disciplinas'; // importa a pag de disciplina
import Home from './pages/Home'; // importa a pag de home
import Perfil from './pages/Perfil'; // importa a pag de perfil
import Erro from './pages/Erro'; // importa a pag de erro
import Curso from './pages/Curso';

export default function RoutesApp(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Biblioteca" element={<Biblioteca/>}/>
            <Route path="/Disciplinas" element={<Disciplinas/>}/>
            <Route path="/Perfil" element={<Perfil/>}/>
            <Route path="/Curso/:title" element={<Curso/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
    </BrowserRouter>
    );
}