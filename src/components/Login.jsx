import {  useState } from "react"
import "../bootstrap.css"
import"../Login.css"

import Logo from "../Images/logo-removebg-preview.png"
const Login = () => {
  
  const [nameval,setNameVal]= useState({
    Email: "",
    password:""
  })


  const handleChange = (event)=>{
    const {name,value}=event.target;
 
    setNameVal(preVal => {
   return {
    ...preVal,
    [name]: value
  }
});
// console.log(value)
  }
  // console.log(nameval)

  // const[user,setUser] = useState(localStorage.getItem("user") || "")
  // useEffect(()=>{
  //   localStorage.setItem("user",user)
  // },[user])


  function handleClick(event){
    event.preventDefault();
    // setUser(`Welcome,${nameval.Email}`)
  }


  return (

 <>
    <div className="parent">
     <div className="left">
       <div><img className="img" src={Logo} alt="" width="100px"  height="150px" /></div>

      <div className="grid">
        <form className="form-signin">
          <div className="text-center mb-4">
            <h1 className="h3 mt-4 mb-3" style={{color: "rgb(255, 217, 5)", fontSize:"40px",fontWeight:"700"}}>Midwest Records</h1>
            {/* <p style={{color:"rgb(255, 255, 255)", fontWeight:"600",fontSize: "18px",border:" 3px solid rgb(233, 200, 17)",borderRadius: "60px"}}>Login As an Artist</p> */}
             </div>
    
          <div className="form-label-group">
            <input  type="text"  className="form-control" onChange={handleChange} value={nameval.Email} name="Email"  placeholder="Email address" autoFocus />
            <label htmlFor="inputEmail">Email address</label>
          </div>
    
          <div className="form-label-group">
            <input type="password" className="form-control" onChange={handleChange} value={nameval.password} name="password" placeholder="password" autoFocus />
            <label htmlFor="inputpassword">password</label>
          </div>
    
          <div className="checkbox mb-3">
            <label className="text-white">
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button onClick={handleClick} className="btn btn-lg  btn-block mx-1 w-100  font-weight-bold" style={{background: "gold",fill: "gold"}}  type="submit">Sign in</button>
                    <p className="role">Login As an Artist</p>

        </form>
      </div>
    </div>
     
  <div className="right">
  <h1><span style={{fontSize:"120px",fontWeight:"2000"}}>LOGIN</span> <br/>To Check Your Music Activities</h1>
<div className="grid-star">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{ fill:"gold",width:"100px"}} className="icon">
 <path d="M10.7878 3.10215C11.283 2.09877 12.7138 2.09876 13.209 3.10215L15.567 7.87987L20.8395 8.64601C21.9468 8.80691 22.3889 10.1677 21.5877 10.9487L17.7724 14.6676L18.6731 19.9189C18.8622 21.0217 17.7047 21.8627 16.7143 21.342L11.9984 18.8627L7.28252 21.342C6.29213 21.8627 5.13459 21.0217 5.32374 19.9189L6.2244 14.6676L2.40916 10.9487C1.60791 10.1677 2.05005 8.80691 3.15735 8.64601L8.42988 7.87987L10.7878 3.10215Z"className="star"></path>
     </svg>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{ fill:"gold",width:"100px"}} className="icon">
 <path d="M10.7878 3.10215C11.283 2.09877 12.7138 2.09876 13.209 3.10215L15.567 7.87987L20.8395 8.64601C21.9468 8.80691 22.3889 10.1677 21.5877 10.9487L17.7724 14.6676L18.6731 19.9189C18.8622 21.0217 17.7047 21.8627 16.7143 21.342L11.9984 18.8627L7.28252 21.342C6.29213 21.8627 5.13459 21.0217 5.32374 19.9189L6.2244 14.6676L2.40916 10.9487C1.60791 10.1677 2.05005 8.80691 3.15735 8.64601L8.42988 7.87987L10.7878 3.10215Z"className="star"></path>
    </svg>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{ fill:"gold",width:"100px"}} className="icon">
 <path d="M10.7878 3.10215C11.283 2.09877 12.7138 2.09876 13.209 3.10215L15.567 7.87987L20.8395 8.64601C21.9468 8.80691 22.3889 10.1677 21.5877 10.9487L17.7724 14.6676L18.6731 19.9189C18.8622 21.0217 17.7047 21.8627 16.7143 21.342L11.9984 18.8627L7.28252 21.342C6.29213 21.8627 5.13459 21.0217 5.32374 19.9189L6.2244 14.6676L2.40916 10.9487C1.60791 10.1677 2.05005 8.80691 3.15735 8.64601L8.42988 7.87987L10.7878 3.10215Z"className="star"></path>
      </svg>
</div> 
   </div>
          </div>
   </>
  )
}

export default Login