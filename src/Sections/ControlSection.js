import { useState } from "react";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
export const ControlSection = () => {
    const [ paused, setPaused ] = useState(true);
    return(
        <div className="flex">
            <AiFillStepBackward size={35} className="cursor-pointer m-2"/>
            <div onClick={()=>{setPaused(paused => !paused)}}>
                {paused ? <AiOutlinePauseCircle size={35} className="cursor-pointer m-2"/> : <AiOutlinePlayCircle size={35} className="cursor-pointer m-2"/>}
            </div>
            <AiFillStepForward size={35} className="cursor-pointer m-2"/>
        </div>
    )
}