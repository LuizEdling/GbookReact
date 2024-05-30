import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login'; // Adicione esta linha
import Biblioteca from './pages/Biblioteca';
import Disciplinas from './pages/Disciplinas';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Erro from './pages/Erro'; // Adicione esta linha

export default function RoutesApp(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Biblioteca" element={<Biblioteca/>}/>
            <Route path="/Disciplinas" element={<Disciplinas/>}/>
            <Route path="/Perfil" element={<Perfil/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
    </BrowserRouter>
    );
}