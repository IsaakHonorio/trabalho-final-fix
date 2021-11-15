import react, {FC, useState} from "react";
import '../cabecalho/style.scss';
import {Route} from 'react-router-dom';
import routerConfig from '../../routerConfig';
import Github from "../github/index";
import Lupa from "../../imagens do projeto/main_images/lupa.png";
import Menu from "../../imagens do projeto/main_images/menu.jpg";

const Cabecalho: FC = () => {
    const openMenu = () => {
        // codigo que no video sobre fazer menu mobile de javascript
        //     function myFunction() {
        //         let menu = useState("instrumentos");
                
        //         if ( menu.style.display === "block") {
        //           menu.style.display = "none";
        //         } else {
        //           menu.style.display = "block";
        //         }
        //      }
        };
    return <>
            <div className="container ">
                <div className="row navbar navbar-dark fixed-top">
                    
                    <div>
                        <span id="name" className=" container-fluid col-12 estilo-big left d-inline">
                            M
                                <span className="estilo">
                                    Place
                                </span>
                        </span>                        
                    </div>
                    
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
                                <img className="imag" alt="search" src={Lupa} onClick={()=> {openMenu()} } />
                            </button>
                        </nav>
                    <nav id="botao" className="icon--cab">
                        <img alt="menu" src={Menu} className="jedi--cab"/>
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