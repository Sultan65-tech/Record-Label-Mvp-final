
// import { useEffect, useState } from 'react'
import './index.css'
// import {Routes,Route} from "react-router-dom"
// import Dashboard from "./components/Dashboard"
// import Catalogue from "./components/Catalogue"
// import NotFound  from './components/NotFound'
import Login from "./components/Login"
// import Admin from "../src/components/Admin"


function App() {
  
  // const[count,setCount] = useState(+localStorage.getItem("count") || 0)
  // useEffect(()=>{
  //   localStorage.setItem("count", count.toString())
  // },[count])

  return (
    <>
    {/* <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes> */}

    {/* <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
          window.navigator.vibrate(60)
      }}>Check</button>
    </div>
    <h1>Hey</h1> */}
{/* <Admin/> */}
<Login/>
    </>
  )
}

export default App
