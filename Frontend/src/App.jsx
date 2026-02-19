
import {Routes,Route} from "react-router-dom" 
import Home from "./pages/Home"
import Music from "./pages/Music"
import Studio from "./pages/Studio"
import Events from "./pages/Events"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  
  return (
    <>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Music" element={<Music/>}/>
        <Route path="/Studio" element={<Studio/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>


    </>
  )
}

export default App
