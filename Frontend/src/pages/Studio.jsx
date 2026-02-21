import React from 'react'
import Navbar from '../components/Navbar'
import Logo from "../Images/logo-removebg-preview.png"
import Video from "../IMAGES/vid.mp4"
import Artistall from "../components/Artistall"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"

const Studio = () => {
  return (
 <>
 <Navbar/>
 <div className="background-studio">
       <video src={Video} controls playsInline  autoPlay loop></video>
      </div>
        <marquee behavior="right" direction="right">
      <div className="collaboration-logo">
        <div><img src={Logo} alt=""/></div>
        <div><img src={Logo} alt=""/></div>
      <div><img src={Logo} alt=""/></div>
        <div><img src={Logo} alt=""/></div>
         <div><img src={Logo} alt=""/></div>
          <div><img src={Logo} alt=""/></div>
           <div><img src={Logo} alt=""/></div>
            <div><img src={Logo} alt=""/></div>
             <div><img src={Logo} alt=""/></div>
              <div><img src={Logo} alt=""/></div>
               <div><img src={Logo} alt=""/></div>
                <div><img src={Logo} alt=""/></div>
                 <div><img src={Logo} alt=""/></div>
      </div>
        </marquee>
        <Carousel/>
        <Artistall/>
        <Newsletter/>
        <Footer/>
 </>
  )
}

export default Studio