import React from 'react'
import "../Table.css"
import Artists from "../components/Artists"
// import Artist from "../Images/big man.png"
import { MdAdd} from "react-icons/md";
import Logo from "../Images/logo-removebg-preview.png"
import { Data }  from "../Data.js"

// var show = Data.map((data)=>{
//     console.log(data.name); 
// })
// console.log(show)
const Table = () => {
  return (
    <>
    
 <div className="background">
    {/* <h1>Artist</h1> */}
    <div className="title-content">
        <div className="heading">
            <div> <h1>Artists</h1></div>
        
        </div>
        <div className="action">
            <button>Add Artist <MdAdd size={26} className='add' color="black"/></button>
        </div>
    </div>
    <div className='header'>
        <ul>
            <li>
                <div className='info-art'>Name</div>
            </li>
            <li>
                <div className='info-gen'>Genre</div>
            </li>
            <li>
                <div className='info-rel'>Total Release</div>
            </li>
                 <li>
                <div className='info-sign'>Signed In</div>
            </li>
            <li>
                <div className='info-act'>Action</div>
            </li>
        </ul>
    </div>
       <div className='table'>
            {Data.map((data)=>{
                return(
        <Artists key={data.id} image={data.Image} name={data.name} genre={data.Genre} total={data.Total} sign={data.Sign}/>
                )
             })}
             {/* <Artists name="Sultan"/> */}
        </div>
 </div>
    </>
  )
}

export default Table