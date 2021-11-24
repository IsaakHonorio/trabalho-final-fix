import React, {FC, useState} from "react";
import './style.scss';
import ReactPlayer from "react-player";
import Video from "../cabecalho/videos/computador.mp4"

const Letras: FC = ()=>{
    
    const [ user, setUser] = useState({login:'', username:  '', photo:'', following:'', followers:''}); 
    const [ searchName, setSearchName ] = useState(' ');
    const [ notfound, setNotFound ] = useState(false);    

    const getGithubUser = async () => {
        const response = await fetch("https://api.github.com" + user.username );
        setNotFound(false);
        if(response.status !== 404){
            const data = await response.json();
            setUser(data);
        } else {
            setNotFound(true);
        }
    };

    return <>
    
    <div className="container ">
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
        <p className="title--api">Busca usuário do Github</p>
        <div className="row">
            <div className="col-md-4 offset-md-4 col-12">
                <div className="input-group mb-3">
                    <input type="text" onChange={(e)=>{setSearchName(e.target.value)}} className="form-control" placeholder="Digite o username"   />
                    <div className="input-group-append">
                        <button className=" btn btn-outline-secondary" onClick={()=>{getGithubUser()}} type="button">Button</button>
                    </div>
                </div>
                {notfound === true ? <span>Nome não encontrado!</span> : <></>}
            </div>
        </div>
        <div className="row">
            <div className="">
                <div className="row">
                    <img className="photo--git" alt="not" src={`https://avatars.githubusercontent.com/u/` + user.photo}/>
                    </div>
                    <div className="tittle--git">
                        <div className="">{user.username}</div>
                        <div className="">Seguindo: {user.following}</div>
                        <div className="">Seguidores: {user.followers}</div>
                    </div>
                </div>
            <div className="">

            </div> 
        </div>
    </div>  
    </>
};

export default Letras;