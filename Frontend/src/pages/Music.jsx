import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Newletter from '../components/Newsletter'
import Artistall from '../components/Artistall'
import {MdStars} from "react-icons/md"
import "../Navbar.css"
import Img from "../Images/WHIZDOM (2).jpg"

const Music = () => {
  return (
    <>
    <Navbar/>
       <div className="container1">
    <div className="music-section">
      <div className="text">

        <h1>Uncover new talent and dive deep into the stories behind the music.</h1>
        <p>listen to different types of music and explore just on one click.<br/></p>
        <div className="call-to-action">
          <button  className="one" >LISTEN</button>
          <button style={{border:"4px solid gold",background:"transparent", color:"white"}} >EXPLORE</button>
      </div>

    </div>
  </div>
  </div>
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
    <audio id="mySong">
      <source src="../audio/Big Hookz, KeniFraze, Drygin Arole - Sundown.mp3"/>
    </audio>
<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="icon1 prev_btn" onClick="prevTrack()"><path d="M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204V17.8983Z" className="caretLeft"></path></svg></div>
<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="icon1 playpause_btn" onClick="playpauseTrack()"><path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.8556 8.15498C10.0225 7.69354 9 8.29608 9 9.24847V14.7516C9 15.704 10.0225 16.3065 10.8556 15.8451L16.6134 12.6561C16.852 12.524 17 12.2727 17 12C17 11.7273 16.852 11.4761 16.6134 11.3439L10.8556 8.15498Z" className="playCircle"></path></svg></div>
<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="icon1 next_btn" onClick="nextTrack()"><path d="M9 6.1017C9 5.0278 10.2649 4.4538 11.0732 5.161L17.3838 10.6828C18.1807 11.3801 18.1807 12.6196 17.3838 13.3169L11.0732 18.8387C10.2649 19.5459 9 18.9719 9 17.898L9 6.1017Z" className="caretRight"></path></svg>
</div>
  </div>

            {/* <!---Define the section for displaying the seek slider--> */}
            <div className="slider_container">
                <div className="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" className="seek_slider" />
                <div className="total-duration">4:23</div>
            </div> 

            {/* <!-- Define the section for displaying the volume slider--> */}
            <div className="slider_container">
                <i className="fa fa-volume-down"></i>
                <input type="range" min="1" max="100" value="99" className="volume_slider" />
                <i className="fa fa-volume-up"></i>
            </div>
        </div>
</div>
  </div> 
  <div className='musicians'>
      <Artistall/>
  </div>
<section id="favorites">
    <div className="fav-text">
      <h1>Enjoy Your Favourite Music Now!!!</h1>
    </div>
    <div>
    <h2>Your sound deserves the perfect beat — find it here.</h2>
    </div>
  <div style={{display:"flex",padding: "20px 50px",marginTop: "40px"}}>

 <div className="music-list">
                <h1>Recommendations</h1>
                <div>
                    <h3 style={{color:"gold"}}><i className="fa fa-play-circle"></i>Sun Down</h3>
                    <h3 style={{color:"gold"}}>2:34</h3>
                </div>
                <div>
                    <h3><i className="fa fa-play-circle"></i>Feeling It</h3>
                    <h3>2:34</h3>
                </div>
                <div>
                    <h3><i className="fa fa-play-circle"></i>Baddie</h3>
                    <h3>2:34</h3>
                </div>
                <div>
                    <h3><i className="fa fa-play-circle"></i>Rack City</h3>
                    <h3>2:34</h3>
                </div>
                <div>
                    <h3><i className="fa fa-play-circle"></i>Trouble</h3>
                    <h3>2:34</h3>
                </div>
                <div>
                    <h3><i className="fa fa-play-circle"></i>Rockstar</h3>
                    <h3>2:34</h3>
                </div>
                <div>
                    <h3><i className="fa fa-play-circle"></i>Down Below</h3>
                    <h3>2:34</h3>
                </div>
            </div>

            <div className="music-info">
                <img src={Img} alt="album"/>
                <h2>All Good</h2>
                <h5>The song is debuted at number two on the Billboard 100 chart. <br/> Album: Chilombo <br/> Genre: R&amp;B/Soul</h5>
                <button><a style={{textDecoration:"none",color:" #ffffff"}} href="#Music">Play Now</a></button>
            </div>
            </div>
  </section>

<Newletter/>
<Footer/>

    </>
  )
}

export default Music