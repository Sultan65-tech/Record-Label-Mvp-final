import React from 'react'
import {MdArrowCircleLeft,MdArrowCircleRight} from "react-icons/md"
import JB from "../Images/justin1.jpg"
const Carousel = () => {
  return (
    <div>
        
    <section className="studio-carousel">
     <div className="studio-carousel-grid">
      <h1>Nigeria</h1>
        <div className="studio-carousel-flex">
            <div><MdArrowCircleLeft size={70} cursor={"pointer"} color="gold"/></div>
            <div className='carousel-content'>
             <div> <img src={JB} style={{width:"400px",height:"400px"}}  alt="" /></div>
             <div className='carousel-content-news'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos esse a consequuntur itaque praesentium amet dolores ducimus temporibus maiores, accusantium facere expedita impedit. Libero et dignissimos sed inventore, deleniti debitis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ad maxime quasi veritatis laborum, quo ducimus impedit, asperiores illum ut, libero blanditiis aliquam. Optio, eaque. Soluta ipsa pariatur sit ex.</p>
              </div>
              <div> <button>Read More</button></div>
              </div>
          
            <div><MdArrowCircleRight size={70} cursor={"pointer"} color="gold"/></div>
          </div>
          
          </div>

    </section>
    </div>
  )
}

export default Carousel