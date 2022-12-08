import React from "react";
import DogVideo from "../Media/DogVideo.mp4"
import"../Styled/Video.css"

const Video=()=>{
    return(
        <div className="Cover-conteiner">

            <video className="video" src={DogVideo} autoPlay loop muted></video>

                <h1> |Huellitas por el mundo| </h1>
                <p>| Servicios | Productos |   </p>


        </div>
    )
}
export default Video;