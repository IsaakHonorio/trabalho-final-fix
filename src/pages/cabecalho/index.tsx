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
                    <span id="name" className="col-1 estilo-big left d-inline">
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
                        <nav id="quest" className="col-8 ">
                            <input type="text" className="col-5 rounds" placeholder="Procure algo de seu interesse: " />
                            <button className="container roundes right--cab lup">
                                <img className="imag" alt="search" src={Lupa} />
                            </button>
                        </nav>
                    <nav id="botao" className="icon--cab">
                        <img src="https://img.icons8.com/color/48/000000/top-menu.png"/>
                    </nav>
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