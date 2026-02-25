import React, { useState } from 'react'
import {MdArrowCircleLeft,MdArrowCircleRight} from "react-icons/md"
import JB from "../Images/justin1.jpg"
import { Data } from '../Data'


const Carousel = () => {
  const [count,setCount]=useState(0)
  const [data,setData]= useState({
    image:Data[count].Image,
    text:Data[count].text
  })
  console.log(count)
  
  return (
    <div>
        
    <section className="studio-carousel">
     <div className="studio-carousel-grid">
      <h1>Nigeria</h1>
        <div className="studio-carousel-flex">
            <div><MdArrowCircleLeft size={70} cursor={"pointer"} color="gold" onClick={()=>{ console.log("Good")}}/></div>
            <div className='carousel-content'>
             <div> <img src={data[count].image} style={{width:"400px",height:"400px"}}  alt="" /></div>
             <div className='carousel-content-news'>
              <p>{data[count].text}</p>
              </div>
              <div> <button>Read More</button></div>
              </div>
          
            <div><MdArrowCircleRight size={70} cursor={"pointer"} color="gold" onClick={()=>{ setCount(count + 1);console.log(count)}}/></div>
          </div>
          
          </div>

    </section>
    </div>
  )
}

export default Carousel