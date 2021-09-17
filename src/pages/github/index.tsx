import React, {FC, useState} from "react";
import './style.scss';
import Vaga from "../../imagens do projeto/main_images/vagalume.png";

const Letras: FC = ()=>{
    
    const [ artist, setArtist ] = useState({titulo:'', artist: '', letra: ''}); 
    const [ song, setSong ] = useState({titulo:'', artist: '', letra: ''}); 
    const [searchSpace, setSearchSpace] = useState('');
    const [notfound, setNotFound] = useState(false);
    const key = "1a5ef9449cfcdcaf7c624e922fcbe558";
    let music = document.getElementById("name")?.innerHTML;
    let space = useState(music?.replace(' ', '-'));
    

    const getMusic = async () => {
        const response = await fetch( "https://api.vagalume.com.br/search.php" + "?art=" + artist + "&mus=" + song + "&apikey=" + key);
        setNotFound(false);
        if(response.status !== 404) {
            const space = await response.json();
            const song = await space;
            setMusic(song);
        } else {
            setNotFound(true);
        }
    };
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
                        <button className=" btn btn-outline-secondary" onClick={()=>{getMusic()}} type="button">Button</button>
                    </div>
                </div>
                {notfound === true ? <span>Nome não encontrado!</span> : <></>}
            </div>
        </div>
        <div className="row">
            <div className="col-3 border">
                <span className="title--api">
			        <b>Artist:</b> <i id="artista">Madonna</i> /
			        <b>Song:</b> <i id="music">Holiday</i>
	            </span>
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