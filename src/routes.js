import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Biblioteca from './pages/Biblioteca';
import Disciplinas from './pages/Disciplinas';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Erro from './pages/Erro';
import Curso from './pages/Curso';
import PageDisciplinas from './pages/PageDisciplinas'; 
import Livro from './pages/Livro';

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
                <Route path="/pageDisciplinas/:title" element={<PageDisciplinas/>}/>
                <Route path="/Livro" element={<Livro />} />
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}
