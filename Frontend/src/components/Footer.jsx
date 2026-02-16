import React from 'react'
import {MdFacebook } from "react-icons/md"
import {AiFillTwitterCircle,AiOutlineInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <>
     <footer>
  {/* <!-- <img src="../IMAGES/logo-removebg-preview.png" className="blend-image" alt=""> --> */}
  <div className="flex">
    <div className="r1">
      <h2>Company</h2>
      <hr style={{border:"3px solid gold",borderRadius: "10px",width:"90px",marginLeft:"30px"}}/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Message Us</li>
        <li>Book Now</li>
      </ul>
    </div>

     <div className="r1">
      <h2>About Us</h2>
      <hr style={{border:"3px solid gold",borderRadius:"10px",width:"90px",marginLeft:"30px"}}/>
      <ul>
        <li>Join Us</li>
        <li>Our Artist</li>
        <li>Events</li>
        <li>Achievements</li>
        <li>Records</li>
      </ul>
    </div>

     <div className="r1">
       <h2>Join us</h2>
       <hr style={{border:"3px solid gold",borderRadius:"10px",width:"90px",marginLeft:"30px"}}/>
      <ul>
        <li>Message Us</li>
        <li>Contact Us</li>
        <li>Email Us</li>
      </ul>
    </div>

    <div className="feedback">
<div>
        <input type="text" placeholder="Leave a thought...."/>
      <button>Submit</button>
</div>
<div>
    <a href="../">
  <AiFillTwitterCircle size={50} color='gold'/>
  </a>
        <a href="https://www.facebook.com">
    <MdFacebook size={50} color='gold'/>
        </a>
        <a href="https://www.youtube.com">
        <AiOutlineInstagram size={50} color='gold'/>
        </a>
</div>
    </div>
  </div>
 </footer>
    </>
  )
}

export default Footer