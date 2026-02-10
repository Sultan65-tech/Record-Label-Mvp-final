import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { MdMusicVideo} from "react-icons/md";
import "../Card.css"

const Card = (props) => {
  return (

        <div className="Card-grid">
                <div className='Card-body'>
    <div className='title'>
        <FaUsers size={30} color={"black"}/>
    <h1>{props.title}</h1>
    </div>

    <div className='artist-data'>
    <div className="artist-total">
     <h2>{props.value}</h2>
    </div>
    <div className="incremental-value">
  <div className="increment"><p>+25</p></div>
  <div className="decrement"><p>-28</p></div>
    </div>
    </div>
    </div>

        </div>


  )
}

export default Card