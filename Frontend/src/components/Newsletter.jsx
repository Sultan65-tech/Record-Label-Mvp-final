import React from 'react'
import "../Navbar.css"

const Newletter = () => {
  return (
    <>
     <div className="news-letter">
    <div className="details">
      <h1>Subscribe to our <br/><b style={{color: "gold"}}>Newsletter</b>
      </h1>
      <details>
        <summary>Why you should Subscribe to our Newsletter</summary>
        <hr style={{border:"4px solid gold",width:"170px",marginLeft:"80px"}}/>
        <p>Our mission is to
cultivate and smolify the voices <br/> of talented artists across the
heartland and beyond. <br/> We are committed to pushing the
boundaries of sound and <br/> genre, Providing a platform where
artists can thrive and <br/> audiences  can discover the next wave of
musical introvention.</p>
      </details>
    </div>

    <div className="info">
      <form>
        <fieldset>
          <legend><center>Input your information</center></legend>
          <input type="text" name="" autoComplete="on" id="Fname" placeholder="Input your First-name"/><br/>
          <input type="text" name="" autoComplete="on" id="Lname" placeholder="Input your First-name"/><br/>
          <input type="email" name="" autoComplete="on" id="Email" placeholder="Input your Email address"/>
          <p><input type="checkbox"/><label for="get">Get Daily Recommendations and Updates</label></p>
          <button type="submit">Subscribe</button>
          </fieldset>
      </form>
    </div>

  </div>
    </>
  )
}

export default Newletter