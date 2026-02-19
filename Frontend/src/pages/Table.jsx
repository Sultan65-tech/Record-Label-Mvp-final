import React from 'react'
import {Link} from "react-router-dom"
import "../Table.css"
import Artists from "../pages/Artists.jsx"
import { useState } from 'react'
import { MdAdd} from "react-icons/md"
import Logo from "../Images/logo-removebg-preview.png"
import { useEffect } from 'react'



const Table = () => {
  const [artist,setArtist] = useState([])

    useEffect(()=>{
        const Api = async ()=>{
    try {
     const  response= await fetch("http://localhost:3000/api/artists");
      let body=await response.json();
      setArtist(body)
   }catch (error) {
        console.log("Error in Table API",error)
    }
};
    Api();
    },[])
{localStorage.setItem('artists', JSON.stringify(artist))}

  return (
    <>
{/* localStorage.setItem('myArtists', JSON.stringify(mockDB.artists)); */}
 <div className="background">
    {/* <h1>Artist</h1> */}
    <div className="title-content">
        <div className="heading">
            <div> <h1>Artists</h1></div>
        
        </div>
        <div className="action">
       <Link to="/"><button>Add Artist <MdAdd size={26} className='add' color="black"/></button></Link>
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
            {artist.map((datum)=>{
                return(
                    
        <Artists key={datum.id}  name={datum.name} genre={datum.genre} total={datum.total} sign={datum.signedDate}/>
                )
             })}
             {/* <Artists name="Sultan"/> */}
        </div>
 </div>
    </>
  )
}

export default Table