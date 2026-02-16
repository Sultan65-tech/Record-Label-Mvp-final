import React from 'react'
import "../Navbar.css"

import Artist from "../IMAGES/big man.png"

const ArtistCard = (props) => {
  return (
    <>


      <div className="flex-artist">
        <img src={props.image} className="slide1" width="300px" height="300px" alt=""/>
        <center>
        <div className='card-content'>

          <div className="title-music">
            <div className="title"><p>{props.title}-</p></div>
            <div className="artist"><p>{props.artist}</p></div>
          </div>

          <div className="listen"><button>Play Now</button></div>
        </div>
        </center>
      </div>

      
     

 


    </>
  )
}

export default ArtistCard