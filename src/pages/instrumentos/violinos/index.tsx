import react, {FC} from "react";
import ReactPlayer from "react-player";
import './style.scss';
import Violino1 from "../../../imagens do projeto/ads_violin/violino1.jpg";
import Violino2 from "../../../imagens do projeto/ads_violin/violino2.jpg";
import Violino3 from "../../../imagens do projeto/ads_violin/violino3.jpg";
import Violino4 from "../../../imagens do projeto/ads_violin/violino4.webp";
import Violino5 from "../../../imagens do projeto/ads_violin/violino5.webp";
import Video from "../../cabecalho/videos/violino.mp4";

const Violinos: FC = () => {
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
                        <a href="https://www.multisom.com.br/violao-artistico-strinberg-sa200c-eletrico-cordas-de-aco-com-afinador-ms-p1090382?pp=/44.4469/&gclid=CjwKCAjw092IBhAwEiwAxR1lRsqkFDVcMb9O1btalZICkvFsrwdEVs-AtAnKL9McJbTqCtR5Zs6gQhoC1eEQAvD_BwE">
                            <img  alt="Violino 1" className="ima" src= {Violino1} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/violao-artistico-strinberg-sa200c-eletrico-cordas-de-aco-com-afinador-ms-p1090382?pp=/44.4469/&gclid=CjwKCAjw092IBhAwEiwAxR1lRsqkFDVcMb9O1btalZICkvFsrwdEVs-AtAnKL9McJbTqCtR5Zs6gQhoC1eEQAvD_BwE">
                            <span className="links ">
                            Violino 1/2 Yamaha V3SKA12 Envernizado com Case - Natural
                            </span>
                        </a>
                        <div className="desc">
                                Violino com otima durabilidade e tonalidade
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
                        <a href="https://www.multisom.com.br/violao-artistico-strinberg-sa200c-eletrico-cordas-de-aco-com-afinador-ms-p1090382?pp=/44.4469/&gclid=CjwKCAjw092IBhAwEiwAxR1lRsqkFDVcMb9O1btalZICkvFsrwdEVs-AtAnKL9McJbTqCtR5Zs6gQhoC1eEQAvD_BwE">
                            <img  alt="Violino 2" className="ima" src= {Violino2} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/violao-artistico-strinberg-sa200c-eletrico-cordas-de-aco-com-afinador-ms-p1090382?pp=/44.4469/&gclid=CjwKCAjw092IBhAwEiwAxR1lRsqkFDVcMb9O1btalZICkvFsrwdEVs-AtAnKL9McJbTqCtR5Zs6gQhoC1eEQAvD_BwE">
                            <span className="links ">
                                Violino Strinberg SA200C Elétrico Cordas de Aço com Afinador Amadeirada
                            </span>
                        </a>
                        <div className="desc">
                                Violino com otima durabilidade e tonalidade
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
                        <a href="https://www.multisom.com.br/violao-artistico-strinberg-sa200c-eletrico-cordas-de-aco-com-afinador-ms-p1090382?pp=/44.4469/&gclid=CjwKCAjw092IBhAwEiwAxR1lRsqkFDVcMb9O1btalZICkvFsrwdEVs-AtAnKL9McJbTqCtR5Zs6gQhoC1eEQAvD_BwE">
                            <img  alt="Violino 3" className="ima" src= {Violino3} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/violao-artistico-strinberg-sa200c-eletrico-cordas-de-aco-com-afinador-ms-p1090382?pp=/44.4469/&gclid=CjwKCAjw092IBhAwEiwAxR1lRsqkFDVcMb9O1btalZICkvFsrwdEVs-AtAnKL9McJbTqCtR5Zs6gQhoC1eEQAvD_BwE">
                            <span className="links ">
                                Violino Strinberg SA200C Elétrico Cordas de Aço com Afinador Amaderada Clara
                            </span>
                        </a>
                        <div className="desc">
                                Violino com otima durabilidade e tonalidade
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
                        <a href="https://www.multisom.com.br/violao-yamaha-slg200n-silent-vazado-eletrico-cordas-nylon-com-afinador-e-bag-ms-p1090178?pp=/44.2895/&gclid=CjwKCAjw092IBhAwEiwAxR1lRuuo1xCJSaMOLPlUApGluksnxOBcVz9QRbc7Y_dZdd3gz-ra62xVPhoCnjoQAvD_BwE">
                            <img  alt="Violino 4" className="ima" src= {Violino4} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.multisom.com.br/violao-yamaha-slg200n-silent-vazado-eletrico-cordas-nylon-com-afinador-e-bag-ms-p1090178?pp=/44.2895/&gclid=CjwKCAjw092IBhAwEiwAxR1lRuuo1xCJSaMOLPlUApGluksnxOBcVz9QRbc7Y_dZdd3gz-ra62xVPhoCnjoQAvD_BwE">
                            <span className="links ">
                                Violino Acustico Aço Azul La-40e Bl
                            </span>
                        </a>
                        <div className="desc">
                                Violino com otima durabilidade e tonalidade
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
                        <a href="https://www.americanas.com.br/produto/1611919948?opn=YSMESP&sellerid=19789633000159">
                            <img  alt="Violino 5" className="ima" src= {Violino5} />
                        </a>
                    </div>
                    <div className="col-9 borderes">
                        <a href="https://www.americanas.com.br/produto/1611919948?opn=YSMESP&sellerid=19789633000159">
                            <span className="links ">
                                Violino Yamaha SLG200N Silent Vazado Elétrico Cordas de Nylon com Afinador e Bag
                            </span>
                        </a>
                        <div className="desc">
                                Violino com otima durabilidade e tonalidade
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

                </div>
            </div>
        </>
};

export default Violinos;