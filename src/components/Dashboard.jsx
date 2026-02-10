import React from 'react'
import "../Admin.css"
import Card from "../components/Card"
import Table from "../components/Table"
const Dashboard = () => {
  return (
    <div>
       <main>
     <div className="Card-grid">
           <Card title="Total Artist" value="1450"/>
           <Card title="Total Streams" value="4000"/>
              <Card title="Total Revenue" value="$800"/>
     </div>
     <Table/>
    </main>
    </div>
  )
}

export default Dashboard