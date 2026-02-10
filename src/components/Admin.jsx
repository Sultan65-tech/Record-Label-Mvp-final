import React from 'react'
import {Outlet,Link} from "react-router-dom"
import Dashboard from "../components/Dashboard"
import Catalogue from "../components/Catalogue"
import NotFound from "../components/NotFound"
import Card from "../components/Card"
import Table from "../components/Table"
import { GiProgression } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { GrCatalog } from "react-icons/gr";
import {MdCircleNotifications } from "react-icons/md"
import { MdKeyboardArrowRight  } from "react-icons/md"
import { BiSolidReport } from "react-icons/bi";
import { MdGames } from "react-icons/md";
import { MdMusicVideo  } from "react-icons/md";
import Logo from "../Images/logo-removebg-preview.png"
import "../Admin.css"

const Admin = () => {
  return (
    <>
    <header>
        <nav>
            <div>
                <h1>Welcome</h1>
            </div>
            <div className="search">
               <form action="">
                 <input type="text" placeholder='Enter a text....' />
                <button>search</button>
               </form>
           <div>
                            <MdCircleNotifications size={50} color={"gold"} cursor={"pointer"}/>
           </div>
            </div>
        </nav>
    </header>
    <aside>
       <div className='brand'>
<div> <img src={Logo} alt=""  width={50}/>  </div>
<div><h1>MidWest</h1></div>
       </div>
     <hr style={{border:"1px solid gold"}}/>
       
<nav> <ul>
            <li><GiProgression size={30} color={"gold"}/> <Link to="/Dashboard">Dashboards</Link></li>
            <li><GrCatalog size={30} color={"gold"}/><Link to="/Catalogue">Catalogue</Link></li>
            <li><FaUsers size={30} color={"gold"}/><Link to="/Catalogue">Catalogue</Link></li>
            <li>< BiSolidReport size={30} color={"gold"}/><Link to="/Catalogue">Catalogue</Link></li>
            <li><MdGames size={30} color={"gold"}/><Link to="/Catalogue">Catalogue</Link></li>
            <li><MdGames size={30} color={"gold"}/><Link to="/Catalogue">Catalogue</Link></li>
        </ul></nav>

        <footer>
            <div className='logOut-flex'>
             <div className='log'> <h3>Logout</h3></div>
<div className='logOut-icon'><MdKeyboardArrowRight size={40}/></div>
            </div>
        </footer>
    
    </aside>
   <main>
     <Outlet/>
   </main>
  {/* <Dashboard/> */}
    </>
  )
}

export default Admin