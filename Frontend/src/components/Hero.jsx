import React from 'react'

import Navbar from './Navbar'
import Stars from './Stars'
import Star from "./Star"

import justinBeiber from "../IMAGES/justin1.jpg"
import Bighookz from "../IMAGES/juicewrld1.jpg"
import wizdom from "../IMAGES/WHIZDOM (2).jpg"
import Video from "../IMAGES/0_Gold_Abstract_3840x2160.mp4"

const Hero = () => {
  return (
    <>
       <div className="container">
<Navbar/>

<div className="background-video">
       <video autoPlay muted loop>
           <source src={Video}   type="video/mp4"></source>
      </video>
      
     </div>
        <Stars/>
    <div className="content">
      <h1>Stream the latest hits and hidden gems, all in one place.</h1>
         <div className="signed">
        <img src={justinBeiber}   style={{position:"relative",left:"48px",zIndex:"-1"}} alt=""/>
         <img src={Bighookz}   style={{position:"relative",left:"39px",zIndex:"1"}} alt=""/>
          <img src={wizdom}   style={{position:"relative",left:"22px",zIndex:"1",}} alt=""/>
      <span>Over 300+ artists.</span>
      </div>
    </div>
<Star/>


  </div>
     
    </>
  )
}

export default Hero