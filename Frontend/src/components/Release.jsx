import React from 'react'
import { Music } from '../Data'
import ArtistCard from './ArtistCard'

const Release = () => {
  return (
    <>
             <section id='artist-container'>
                  <div className="features-text">
      <h1 className="">NEW RELEASE</h1>
    </div>
      <div className="Features-artist">
        {
              Music.map((music)=>{
                return(
                <ArtistCard key={music.id} image={music.Image} title={music.title} artist={music.artist}/>
              )
              })
            }
              </div>
      <div className="seemore">
      <button className="seemore-btn"><a href="../HTML/music.html">see more </a></button>
    </div>
  </section>
    </>
  )
}

export default Release