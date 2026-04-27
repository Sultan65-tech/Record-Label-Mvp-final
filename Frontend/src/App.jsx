
import {Routes,Route} from "react-router-dom" 
import Home from "./pages/Home"
import Music from "./pages/Music"
import Studio from "./pages/Studio"
import Events from "./pages/Events"
import About from "./pages/About"
import Promote from "./components/Promote"
import NotFound from "./pages/NotFound"
import "./index.css"

function App() {
  
  return (
    <>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Music" element={<Music/>}/>
        <Route path="/Studio" element={<Studio/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/About" element={<About/>}/>
           <Route path="/Promote" element={<Promote/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>

    </>
  )
//   \


// db.products.updateOne({_id:1},{$set:{reviews:[{authorName:"Mubarak",rating:3,review:"Awesome pen ever"},
//   {authorName:"james",rating:9,review:"Amazing pencil"}]
// }}



}

export default App
