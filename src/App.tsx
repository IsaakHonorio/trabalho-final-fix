import React from "react";
import Rodape from "./pages/rodape"
import Cabecalho from "./pages/cabecalho";
import './App.css';

function App() {
    return (
        <div className= "App">
            <Cabecalho />
            <div className="video-background">
                <video className="bgvid" autoPlay loop muted playsInline>
                    <source src= "./cabecalho/videos/videoguita.mp4"  type= "video/mp4" />
                </video>
            </div>
            <Rodape /> 
        </div>
    );
}

export default App;