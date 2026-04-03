import React from "react"
import {Link} from "react-router-dom"
import Promote from "./Promote"

const Promotion=()=>{
    return(
          <section className='Promotion'>
    <div className="book_show">
    <div className="show-item">
      <h1>Promote your music</h1>
      <p>Get your front-row seat to live music events, <br/> tours, and exclusive shows.</p>
    </div>
   <div className="book-btn">
    {/* Transfor to a component */}

     <Link to="/promote" style={{textDecoration:"none",color: "black"}}><button className="btn-gold">Promote Now</button></Link>
    <Link to="https://www.facebook.com/tannika.boutminemay" style={{textDecoration:"none",color: "black"}}> <button className="btn-white">Explore more!!</button></Link>
   </div>
  </div>
</section>
    )
}

export default Promotion