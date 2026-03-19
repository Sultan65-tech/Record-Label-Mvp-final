import React from "react"
import { useRef,useState,useEffect } from "react";
import {MdStars} from "react-icons/md"
function Audioplayer({audioSrc}) {

      // State variables
    const [isPlaying,setIsPlaying] = useState(false);
    const [currentTime,setCurrentTime] = useState(0)
    const [duration,setDuration] = useState(0)

const audioRef = useRef(null)

//   function to seek the play time
     const handleSeek = (e) =>{
audioRef.current.currentTime = e.target.value; 
setCurrentTime(e.target.value)
     }

    //  Function to update the current time and duration of the audio.
   const handleTimeupdate = ()=>{
     setCurrentTime(audioRef.current.currentTime);
     setDuration(audioRef.current.duration);
   }

    //    Function to handle audio play event
      const handlePlay = ()=>{
        audioRef.current.play();
        setIsPlaying(true)
      }
         const handlePause = ()=>{
        audioRef.current.pause();
        setIsPlaying(false)
      }

    //  Function to handle the Play and pause event
     const handlePlayPause = () => {
    if(isPlaying) {
         handlePause();
    } else { 
        handlePlay();
    }
  }

  // Function to format the timing

function formatDuration(durationSeconds) {
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = Math.floor(durationSeconds % 60);
  const formattedseconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${formattedseconds}`
}

//  Use an Effect to listen for "timedupdate" events from the audio element and update timer
useEffect(()=>{
     audioRef.current.addEventListener("timeupdate",handleTimeupdate);
    // Clean up the current eventlistener when the component unmount
    return () => {
        // audioRef.current.removeEventListener("timeupdate",handleTimeupdate);
    }
},[])


 return (
<div className="music-player" id="Music">
  
  <div className="music-player-text">
    <h1>Hot <MdStars size={"50px"}  style={{position:"relative",top:"7px",left:"3px"}}/> Music</h1>
    {/* <!-- scroll-snap-style:y mandatory;
    scale:1.05; --> */}
<div className="music-flex">
    <div className="music-image"></div>
  <div className="music-title">
    <h2 className="music-name">Sun Down</h2>
    <p className="music-artist">Bigdaddy,Big Hookz & Dry gin </p>
  </div>
  <div className="controls">
    {/* <audio id="mySong">
      <source src="../audio/Big Hookz, KeniFraze, Drygin Arole - Sundown.mp3"/>
    </audio> */}
    <audio ref={audioRef} src={audioSrc}></audio>



<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="icon1 prev_btn" ><path d="M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204V17.8983Z" className="caretLeft"></path></svg></div>
<div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" onClick={handlePlayPause} className="icon1 playpause_btn" ><path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.8556 8.15498C10.0225 7.69354 9 8.29608 9 9.24847V14.7516C9 15.704 10.0225 16.3065 10.8556 15.8451L16.6134 12.6561C16.852 12.524 17 12.2727 17 12C17 11.7273 16.852 11.4761 16.6134 11.3439L10.8556 8.15498Z" className="playCircle"></path></svg>
{isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="icon1 playpause_btn" ><path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.8556 8.15498C10.0225 7.69354 9 8.29608 9 9.24847V14.7516C9 15.704 10.0225 16.3065 10.8556 15.8451L16.6134 12.6561C16.852 12.524 17 12.2727 17 12C17 11.7273 16.852 11.4761 16.6134 11.3439L10.8556 8.15498Z" className="playCircle"></path></svg> : "" }
</div>
<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="icon1 next_btn" onClick="nextTrack()"><path d="M9 6.1017C9 5.0278 10.2649 4.4538 11.0732 5.161L17.3838 10.6828C18.1807 11.3801 18.1807 12.6196 17.3838 13.3169L11.0732 18.8387C10.2649 19.5459 9 18.9719 9 17.898L9 6.1017Z" className="caretRight"></path></svg>
</div>
  </div>

            {/* <!---Define the section for displaying the seek slider--> */}
            <div className="slider_container">
                <div className="current-time">{formatDuration(currentTime)}</div>
                <input type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} className="seek_slider" />
                <div className="total-duration">{formatDuration(duration)}</div>
            </div> 

            {/* <!-- Define the section for displaying the volume slider--> */}
            {/* <div className="slider_container">
                <i className="fa fa-volume-down"></i>
                <input type="range" min="1" max="100" value="99" className="volume_slider" />
                <i className="fa fa-volume-up"></i>
            </div> */}
        </div>
</div>
  </div> 
  )
}

export default Audioplayer 
   