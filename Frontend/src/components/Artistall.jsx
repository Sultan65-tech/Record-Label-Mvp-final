import React from 'react'
import "../Navbar.css"
import {Data} from '../Data'

const change = Data.length=3;
console.log(change)
const Artistall = () => {
  return (
    <div className='testimonial'>
        <div className='testimonial-heading'><h1>Artists</h1></div>
  <div className='testimonial-grid'>
    {Data.map((music)=>{
            return(
             <div className='testimonial-flex'>
                <div><img src={music.Image} width={"300px"} height={"300px"} style={{borderRadius:"150px"}} alt="" /></div>
                <div><p>{music.name}</p></div>
             </div>
            )
        })}
  </div>
    </div>
  )
}

export default Artistall