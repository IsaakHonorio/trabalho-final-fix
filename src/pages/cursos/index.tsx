import react, {FC} from "react";
import './style.scss';
import Propaganda_1 from "../../imagens do projeto/ads_curso/propaganda1.png";
import Propaganda_2 from "../../imagens do projeto/ads_curso/propaganda2.jpg";

const Cursos: FC = () => {
    const Ads = [
        {name: "ads1", photo: Propaganda_1, write: "Curso completo com desconto de 50% de desconto", valor: "R$400,00" },
        {name: "ads2", photo: Propaganda_2, write: "Curso de guitarra completo com escalas", valor: "R$150,00" },
    ];

    return <>
        {Ads.map( (value)=> {
            return <div className="border rounded imagem">
                        <img alt={value.name} className="jedi " src={value.photo} />
                        <div className="link" >
                            {value.write}
                            <p />
                            {value.valor}
                        </div>
                    </div>                     
        }   )}
    </>
};

export default Cursos;