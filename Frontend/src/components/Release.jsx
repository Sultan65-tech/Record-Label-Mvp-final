import React from 'react'
import { Music } from '../Data'
import ArtistCard from './ArtistCard'
import FancyButton from './FancyButton';
// import { useState } from 'react';

const change= Music.length=3;
console.log(change)
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
                <ArtistCard key={music.id} image={music.image} title={music.title} artist={music.artist}/>
              )
              })
            }
              </div>
    <FancyButton/>
  </section>
    </>
  )
}

export default Release