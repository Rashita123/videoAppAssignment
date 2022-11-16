import { useState, useRef } from "react";

export const InputSection = () => {
    const [ uploadedVideo, setUploadedVideo ] = useState(null);
    const [ uploadedSrtFile, setUploadedSrtFile ] = useState(null);

    const videoElement = useRef(null);
    const uploadVideo = (e) => {
        let file = e.target.files[0];
        let blobURL = URL.createObjectURL(file);
        setUploadedVideo(blobURL);
    }
    const uploadSrtFile = (e) => {
        let file = e.target.files[0];
        let blobURL = URL.createObjectURL(file);
        setUploadedSrtFile(blobURL);
    }
    const play = () => {
        videoElement.current.play();
    }

    return(
        <div>
            <button className="border-2 border-slate-700 m-4 px-4 py-2">Video Input</button>
            <input type="file" id="video" name="video" accept="video/*" onChange={e => uploadVideo(e)}></input>
            <video src={uploadedVideo} width="320" height="240" ref={videoElement}>
            {/* <source type="video/mp4" src="/my_video_file.mp4" >   <source> */}
            <track src={uploadedSrtFile} label="English" kind="captions" srclang="en-us" default >

            </track>
     </video>
            <button onClick={play}>Play/Pause</button>
            <button className="border-2 border-slate-700 m-4 px-4 py-2">SRT Input</button>
            <input type="file" id="srt-file" name="srtFile" onChange={e => uploadSrtFile(e)}></input>

        </div>
    )
}