import react, {FC, useState} from "react";
import './style.scss'

const Github: FC = () => {
    const [user, setUser] = useState({login:'', username:  '', photo:'', following:'', followers:''})
    
    return <>
        <div className="container github sz">
            <p>Buscar por usuarios no Github</p>
            <div className="row">
                <div className="col-md-4 offset-md-4 col 12">
                    <div className='input-group mb-3 '>
                        <input type="text" className="form-control" placeholder="Digite o username" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">clique aqui</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className=" border round "> {user.photo} </div>
                <div className="col-3 border divs">
                    <p className="github-login">{user.login}</p>
                    <p>{user.username}</p>
                    <img className="w-50 rounded-circle" alt="" src={"https://avatars.githubusercontent.con/u/" + user.photo}></img>
                    <div className="row">
                        <div className="col-3">Seguido: {user.following} </div>
                        <div className="col-3">Seguindo: {user.followers} </div>
                    </div> 
                </div>
                <div className="col-9 border">
                </div>
            </div>
        </div>
    </>
};

export default Github;