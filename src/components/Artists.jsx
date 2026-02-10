import React from 'react'
import { MdDeleteForever } from "react-icons/md";
const Artists = (props) => {
  return (
         <ul>
    <li>
        <div className="table-grid">
              <div className='artist-info'>
        <div><img src={props.image} alt="" /></div>
        <div className='artist-bio'>
            <span className='artist-name'>{props.name}</span>
        <span className='artist-gen'>Afro Music</span>
        </div>
       </div>
            <div><h2>{props.genre}</h2></div>
            <div><h2>{props.total}</h2></div>
               <div><p>{props.sign}</p></div>
               <div className='icon'><span><MdDeleteForever size={35} color='red'cursor={"pointer"}/></span></div>
        </div>
    </li>
    
</ul>
  )
}

export default Artists