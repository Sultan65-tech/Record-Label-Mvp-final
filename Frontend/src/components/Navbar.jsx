import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Images/logo-removebg-preview.png"
const Navbar = () => {
  return (
    <>
   <header>
      <div className="navbar">
        <h1><img src={Logo} className="logo" /><b style={{color: "whitesmoke"}}>NO LIMITS<br/>RECORDS <br/><h style={{color:"rgb(238, 186, 143)"}}>MIDWEST</h></b></h1>
        <ul class="animate__animated animate__backInRight">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Music">MUSIC</Link></li>
          <li><Link to="/Studio">STUDIO</Link></li>
          <li><Link to="Events">EVENTS</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
          </ul>
      </div>
    </header>
    </>
  )
}

export default Navbar