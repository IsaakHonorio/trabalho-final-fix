import react, {FC} from "react";
import './style.scss';
import Propaganda_1 from "../../imagens do projeto/ads_curso/propaganda1.png";
import Propaganda_2 from "../../imagens do projeto/ads_curso/propaganda2.jpg";
import Video from "../cabecalho/videos/rec.mp4";
import ReactPlayer from "react-player";

const Cursos: FC = () => {
    const Ads = [
        {name: "ads1", photo: Propaganda_1, write: "Curso completo com desconto de 50% de desconto", valor: "R$400,00", link: "https://www.google.com/search?q=cursos+de+viol%C3%A3o&rlz=1C1CHZN_pt-BRBR947BR948&oq=cursos+de+vio&aqs=chrome.1.69i57j0i512l9.16565j0j7&sourceid=chrome&ie=UTF-8" },
        {name: "ads2", photo: Propaganda_2, write: "Curso de guitarra completo com escalas", valor: "R$150,00", link: "https://www.google.com/search?q=cursos+de+viol%C3%A3o&rlz=1C1CHZN_pt-BRBR947BR948&oq=cursos+de+vio&aqs=chrome.1.69i57j0i512l9.16565j0j7&sourceid=chrome&ie=UTF-8" },
    ];

    return <>
        <div className="video-background">
                <ReactPlayer 
                url={Video}
                width="100%"
                height="100%"
                controls={false}
                loop={true}
                muted={true}
                playing={true}
                playsinline={true}
                />
        </div>
        {Ads.map( (value)=> {
            return <a href={value.link} className="imagem--cursos">
                        <img alt={value.name} className="jedi " src={value.photo} />
                        <div className="link" >
                            {value.write}
                            <p />
                            {value.valor}
                        </div>
                    </a>                     
        }   )}
    </>
};

export default Cursos;