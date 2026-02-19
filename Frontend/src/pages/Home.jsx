import React from 'react'
import "../Navbar.css"
import { Music } from '../Data'
import Hero from '../components/Hero'
import Join from "../components/Join"
import Newsletter from "../components/Newsletter"
import ArtistCard from '../components/ArtistCard'
import Release from "../components/Release"
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
   
    <Hero />
   <Release/>
<Join/>
<Newsletter/>
<Footer/>
   </>
  )
}

export default Home