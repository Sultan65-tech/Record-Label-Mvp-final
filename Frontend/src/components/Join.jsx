import React from 'react'

const Join = () => {
  return (
  <>
  <section className='Join'>
    <div className="book_show">
    <div className="show-item">
      <h1>Join Our Artist</h1>
      <p>Get your front-row seat to live music events, <br/> tours, and exclusive shows.</p>
    </div>
   <div className="book-btn">
    {/* Transfor to a component */}
     <a href="https://www.facebook.com/tannika.boutminemay" style={{textDecoration:"none",color: "black"}}><button className="btn-gold">Book Now</button></a>
    <a href="https://www.facebook.com/tannika.boutminemay" style={{textDecoration:"none",color: "black"}}> <button className="btn-white">Explore</button></a>
   </div>
  </div>
</section>
  </>
  )
}

export default Join