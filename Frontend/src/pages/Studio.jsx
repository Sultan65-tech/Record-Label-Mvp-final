import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Logo from "../Images/logo-removebg-preview.png"
import Video from "../IMAGES/vid.mp4"
import Artistall from "../components/Artistall"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import {MdArrowCircleLeft,MdArrowCircleRight} from "react-icons/md"
import JB from "../Images/justin1.jpg"
import { Data } from '../Data'
const Studio = () => {
  const [count,setCount] = useState(0)
 
  
  return (
 <>
 <Navbar/>
 <div className="background-studio">
       <video src={Video} muted playsInline  autoPlay loop></video>
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
        <section className="studio-carousel">
            <div className="studio-carousel-grid">
             <h1>Nigeria</h1>
               <div className="studio-carousel-flex">
                   <div><MdArrowCircleLeft size={70} cursor={"pointer"} color="gold" onClick={(()=>{})}/></div>
                   <div className='carousel-content'>
                    <div> <img src={Data[count].image} style={{width:"400px",height:"400px"}}  alt="" /></div>
                    <div className='carousel-content-news'>
                     <p>{Data[count].text}</p>
                     </div>
                     <div> <button>Read More</button></div>
                     </div>
                 
                   <div><MdArrowCircleRight size={70} cursor={"pointer"} color="gold" onClick={()=>{
                     return(
                     setCount(count + 1),
                     console.log(count)
         )}}/></div>
                 </div>
                 
                 </div>
       
           </section>
        <Artistall/>
        <Newsletter/>
        <Footer/>
 </>
  )
}

export default Studio