import react, {FC} from "react";
import "./style.scss";
import Pic from "../../imagens do projeto/main_images/sevira.jpg"

const Bugs: FC = () => {
    return <>
        <div className="video-background">
            <img src={Pic} alt="Doubt" className="size--sv" />
        </div>
        <div className="hg-hd">
            <h1>
                Se vira
            </h1>
        </div>
    </>
}

export default Bugs;