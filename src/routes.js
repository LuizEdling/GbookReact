import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Biblioteca from './pages/Biblioteca';
import Disciplinas from './pages/Disciplinas';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

import Header from './components/Header';

export default function RoutesApp(){
return(
    <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Biblioteca" element={<Biblioteca/>}/>
                <Route path="/Disciplinas" element={<Disciplinas/>}/>
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}