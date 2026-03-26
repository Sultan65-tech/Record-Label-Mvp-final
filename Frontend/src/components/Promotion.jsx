import React from "react"

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
     <a href="https://www.facebook.com/tannika.boutminemay" style={{textDecoration:"none",color: "black"}}><button className="btn-gold">Promote Now</button></a>
    <a href="https://www.facebook.com/tannika.boutminemay" style={{textDecoration:"none",color: "black"}}> <button className="btn-white">Explore more!!</button></a>
   </div>
  </div>
</section>
    )
}

export default Promotion