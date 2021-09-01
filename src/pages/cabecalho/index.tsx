import react, {FC} from "react";
import '../cabecalho/style.scss'
import {Route} from 'react-router-dom'
import routerConfig from '../../routerConfig'
import Github from "../github";
import Lupa from "../../imagens do projeto/main_images/lupa.png";

const Cabecalho: FC = () => {
    return <>
            <div className="container ">
                <div className="row navbar navbar-dark fixed-top">
                    <span className="col-1 estilo-big left d-inline">
                        M
                        <span className="estilo">
                            Place
                        </span>
                    </span>
                    <p/>
                    <ul id="instrumentos" className=" container-fluid left col-3 ">

                        <nav className="col-1 d-inline" /> 
                        
                        <li>
                            <a href="./" className="link-cab">
                                Instrumentos
                            </a>
                        </li>
                        
                        <nav className="d-inline">|</nav>
                        
                        <li>
                            <a href="./git" className="link-cab ">
                                Github
                            </a>
                        </li>
                        
                        <nav className="d-inline"> | </nav>
                        
                        <li>
                            <a href="./cs" className="link-cab ">
                                Cursos 
                            </a>
                        </li>
                        <nav className="d-inline"> | </nav>
                        
                        <li>
                            <a href="./saiba" className="link-cab ">
                                Saiba mais 
                            </a>
                        </li>                
                    </ul>
                    <div className="col-lg-4"/>
                        <div id="quest">
                            <input type="text" className="col-3 dis rounds" placeholder="Procure algo de seu interesse: " />
                            <button className="container roundes lup d-inline">
                                <img className="imag" alt="search" src={Lupa} />
                            </button>
                        </div>
                    </div>
            {routerConfig.map((value, key) => {
                return <Route 
                    path={value.path} 
                    component={value.component} 
                    exact={value.exact} key={key} />
                })}
        </div>    
    </>
};



export default Cabecalho;