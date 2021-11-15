import React, {FC, useState} from "react";
import './style.scss';
import Vaga from "../../imagens do projeto/main_images/vagalume.png";

const Letras: FC = ()=>{
    
    const [ artist, setArtist ] = useState({artista: 'art'}); 
    const [ song, setSong ] = useState({titulo: 'mus', letra: 'text'}); 
    
    const [searchSpace, setSearchSpace] = useState("");
    let space = useState(searchSpace?.replace(' ', '-'));
    
    const [notfound, setNotFound] = useState(false);
    let API_KEY = "1a5ef9449cfcdcaf7c624e922fcbe558";
    let API_BASE = "https://api.vagalume.com.br/search.php";
    

    const getSearch = async () => {
        const response = await fetch( API_BASE + "?art=" + artist + "&mus=" + song + "&apikey=" + API_KEY);
        setNotFound(false);
        if(response.status !== 404) {
            const artista = await response.json();
            const musica = await artista;
            setArtist(artista);
            setSong(musica);
        } else {
            setNotFound(true);
        }
    };

    const getCifra = async () => {
        const respota = await fetch ("https://api.vagalume.com.br/search.php");
        
    }



    // const getGithubUser = async () => {
    //     const response = await fetch("https://www.vagalume.com.br/u2/index.js" + searchArtist);
    //     setNotFound(false);
    //     if(response.status !== 404){
    //         const data = await response.json();
    //         const music = data;
    //         setSong(music);
    //     } else {
    //         setNotFound(true);
    //     }
    // };

    return <>
    
    <div className="container github">
        <p>Busca usuário do Github</p>
        <div className="row">
            <div className="col-md-4 offset-md-4 col-12">
                <div className="input-group mb-3">
                    <input type="text" onChange={(e)=>{setSearchSpace(e.target.value)}} className="form-control" placeholder="Digite o username"   />
                    <div className="input-group-append">
                        <button className=" btn btn-outline-secondary" onClick={()=>{getCifra()}} type="button">Button</button>
                    </div>
                </div>
                {notfound === true ? <span>Nome não encontrado!</span> : <></>}
            </div>
        </div>
        <div className="row">
            <div className="col-3 border">
                
                {/* <p className="github-login">{musica.titulo}</p>
                <p>{musica.artist}</p>
                <img className="w-50 rounded-circle" alt="not" src={`https://avatars.githubusercontent.com/u/`}/>
                <div className="row">
                    <div className="col">Seguindo: {musica.letra}</div>
                    <div className="col">Seguidores: {musica.artist}</div>
                </div> */}
            </div>
            {/* <div className="col-9 border">
                {}

            </div> */}
        </div>
    </div>
    </>
};

export default Letras;