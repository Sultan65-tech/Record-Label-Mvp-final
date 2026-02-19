import React from 'react'
import "../Admin.css"
import Card from "./Card"
import Table from "./Table"
const Dashboard = () => {
  return (
    <div>
       
     <div className="Card-grid">
           <Card title="Total Artist" value="1450"/>
           <Card title="Total Streams" value="4000"/>
              <Card title="Total Revenue" value="$800"/>
     </div>
     <Table/>

    </div>
  )
}

export default Dashboard