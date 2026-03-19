import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Newletter from '../components/Newsletter'
import Artistall from '../components/Artistall'
import {Data} from '../Data'
import "../Navbar.css"
import Img from "../Images/WHIZDOM (2).jpg"
import MusicPlayer from "../components/MusicPlayer"
const change = Data.length=3;
console.log(change)

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
<MusicPlayer audioSrc="src/Justin_Beiber_-_You_and_me_(mp3.pm).mp3"/>
  <div className='musicians'>
    {Data.map((music)=>{
      <Artistall image={music.image} name={music.name}/>
    })}
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