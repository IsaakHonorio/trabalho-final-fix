import react, {FC} from "react";
import ReactPlayer from "react-player";
import './style.scss';
import Guita1 from "../../../imagens do projeto/ads_guitarra/guita1.jpg";
import Guita2 from "../../../imagens do projeto/ads_guitarra/guita2.jpg";
import Guita3 from "../../../imagens do projeto/ads_guitarra/guita3.jpg";
import Guita4 from "../../../imagens do projeto/ads_guitarra/guita4.jpg";
import Guita5 from "../../../imagens do projeto/ads_guitarra/guita5.jpg";
import Video from "../../cabecalho/videos/Guitarres.mp4";

const Guitarras: FC = () => {
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
            <div className="container">
                <div className="row">
                    <div className="col-12 spaces" />
                    
                    <div className="col-2 imager">
                        <a href="https://www.americanas.com.br/produto/93538421?opn=YSMESP&sellerid=33379575000116&cor=Laranja%20escuro">
                            <img  alt="Guita 1" className="ima" src= {Guita1} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.americanas.com.br/produto/93538421?opn=YSMESP&sellerid=33379575000116&cor=Laranja%20escuro">
                            <span className="links ">
                                Guitarra Strinberg Les Paul Lps 230 SB
                            </span>
                        </a>
                        <div className="desc">
                            Guitarra com otima durabilidade e tonalidade
                        </div>
                        <div className="valores" >
                            <h3>
                                Valor: 
                                <span className="valores-value" >
                                    R$ 4.749,21
                                </span>
                            </h3>
                        </div>
                    </div>


                    <div className="col-2 imager">
                        <a href="https://www.multisom.com.br/guitarra-stratocaster-strinberg-sts-100-ms-p1087243?pp=/44.2285/&gclid=CjwKCAjw3_KIBhA2EiwAaAAlit6KJLraQbyLW0Ky2V9od9xYwrcratKAPdsKbrup4CkcwoB1z9Tg4hoC4ikQAvD_BwE">
                            <img  alt="Guitarra 2" className="ima" src= {Guita2} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/guitarra-stratocaster-strinberg-sts-100-ms-p1087243?pp=/44.2285/&gclid=CjwKCAjw3_KIBhA2EiwAaAAlit6KJLraQbyLW0Ky2V9od9xYwrcratKAPdsKbrup4CkcwoB1z9Tg4hoC4ikQAvD_BwE">
                            <span className="links ">
                                Guitarra Stratocaster Strinberg STS-100
                            </span>
                        </a>
                        <div className="desc">
                                Guitarra com otima durabilidade e tonalidade
                        </div>
                        <div className="valores" >
                            <h3>
                                Valor: 
                                <span className="valores-value" >
                                    R$ 4.749,21
                                </span>
                            </h3>
                        </div>
                    </div>


                    <div className="col-2 imager">
                        <a href="https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/">
                            <img  alt="Guitarra 3" className="ima" src= {Guita3} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/">
                            <span className="links ">
                                Guitarra Les Paul Strinberg LPS-200 Vermelho
                            </span>
                        </a>
                        <div className="desc">
                                Guitarra com otima durabilidade e tonalidade
                        </div>
                        <div className="valores" >
                            <h3>
                                Valor: 
                                <span className="valores-value" >
                                    R$ 4.749,21
                                </span>
                            </h3>
                        </div>
                    </div>


                    <div className="col-2 imager">
                        <a href="https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/">
                            <img  alt="Guitarra 4" className="ima" src= {Guita4} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/">
                            <span className="links ">
                                Guitarra Les Paul Strinberg LPS-200 Amadeirada
                            </span>
                        </a>
                        <div className="desc">
                                Guitarra com otima durabilidade e tonalidade
                        </div>
                        <div className="valores" >
                            <h3>
                                Valor: 
                                <span className="valores-value" >
                                    R$ 4.749,21
                                </span>
                            </h3>
                        </div>
                    </div>


                    <div className="col-2 imager ">
                        <a href="https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/">
                            <img  alt="Guitarra 5" className="ima" src= {Guita5} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/guitarra-les-paul-strinberg-lps-200-ms-p1087231?pp=/44.4253/">
                            <span className="links ">
                                Guitarra Les Paul Strinberg LPS-200 Preto
                            </span>
                        </a>
                        <div className="desc">
                                Guitarra com otima durabilidade e tonalidade
                        </div>
                        <div className="valores" >
                            <h3>
                                Valor: 
                                <span className="valores-value" >
                                    R$ 4.749,21
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="end">
                        <h5>
                            -"Não tem mais nada por aqui"-
                        </h5>
                    </div>
                    <p/>
                    <p/>

                </div>
            </div>
        </>
};

export default Guitarras;