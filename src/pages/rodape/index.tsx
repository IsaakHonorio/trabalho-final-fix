import react, {FC, useState} from "react";
import './style.scss'

const Rodape: FC = () => {
    const [nome, setNome] = useState('Isaak');
    
    return <div className="row border rodape rodape-bg fixed-bottom">
                <span> Copyright@{new Date().getFullYear()}</span> 
            
                 <div className="text-center">
                 - Criado por 
           
                     <a className="rodape-a" href="https://github.com/Diaconin265">
                        <span className="rodape-link">
                            {" " + nome}
                        </span>  
                    </a>
                </div>
            </div>
    }

export default Rodape;