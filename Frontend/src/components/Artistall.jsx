import React from 'react'
import "../Navbar.css"



const Artistall = (props) => {
  return (
    <div className='testimonial'>
        <div className='testimonial-heading'><h1>Artists</h1></div>
  <div className='testimonial-grid'>
             <div className='testimonial-flex'>
                <div><img src={props.image} width={"300px"} height={"300px"} style={{borderRadius:"150px"}} alt="" /></div>
                <div><p>{props.name}</p></div>
             </div>
   
  </div>
    </div>
  )
}

export default Artistall