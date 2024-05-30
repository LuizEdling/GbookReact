import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Bem-Vindo (a) à página Home</h1>
            <span>Danton Bernardo</span>
            <br/>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            
            <hr/>

            <Link to="/produto/1">Acessar Produto 1</Link>
        </div>
    );
}
