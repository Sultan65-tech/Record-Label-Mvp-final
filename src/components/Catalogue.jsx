import React from 'react'
import Card from "./Card"
import "../Admin.css"
const Catalogue = () => {
  return (
   <main>
     <div className='catalogue'>
       <div className="Card-grid">
           <Card title="Total Assest" value="1450"/>
           <Card title="Monthly Revenue" value="$400"/>
              <Card title="Total Revenue" value="$800"/>
     </div>
      <h1>Catalogue</h1>
      </div>
   </main>
  )
}

export default Catalogue