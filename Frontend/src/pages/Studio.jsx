import React from 'react'
import Navbar from '../components/Navbar'
import Logo from "../Images/logo-removebg-preview.png"
import Video from "../IMAGES/vid.mp4"

const Studio = () => {
  return (
 <>
 <Navbar/>
 <div className="background-studio">
        <video autoPlay muted loop>
            <source src={Video}   type="video/mp4"></source>
       </video>
      </div>
      <div className="collaboration-logo">
        <marquee direction="right"><div><img src={Logo} alt=""/></div></marquee>
        <marquee direction="right"><div><img src={Logo} alt=""/></div></marquee>
       <marquee direction="left"> <div><img src={Logo} alt=""/></div></marquee>
        <marquee direction="right"><div><img src={Logo} alt=""/></div></marquee>
      </div>
      <div className="testimonial">
        <div className="testimonial-grid">
          <div>

          </div>
          <div>
            
          </div>
        </div>
      </div>
 </>
  )
}

export default Studio