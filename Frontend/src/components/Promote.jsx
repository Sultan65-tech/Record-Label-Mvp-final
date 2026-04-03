import React, { useRef, useState } from "react";
import styles from "../Promote.module.css"
import images from "../Images/download-removebg-preview.png"
import {MdArrowBack} from "react-icons/md"
import {Link} from "react-router-dom"

const Promote= ()=>{
    const [image,setimage] = useState(null)
    const [isvisible,setIsvisible] = useState(false)
    const [inputval,setInputval]=useState("")
    const inputRef = useRef(null)

     function handleChange (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
       setimage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
};


    return(
<>
<span className={styles.back}><Link to="/"><MdArrowBack color="gold" size={"60"}/></Link></span>
<div className={styles.parenter}>
     <h1>Input Your Information </h1>

    <form style={{marginBottom: "20px;"}} className={styles.info}>
       
    <div className={styles.parentFlex}>
           <div>
         <input type="text" placeHolder="FirstName"/>
        <input type="text" placeHolder="LastName"/><br/>
       </div>
      <div>
          <input type="text" placeHolder="Stage Name"/>
        <input type="text" placeHolder="Email/phone number"/>
      </div><br/>
        <div>
            <input type="text" ref={inputRef} placeHolder="Social link     eg instagram,twitter..."/>
        </div><br/>
    </div>
    {/* <!-- <button>Submit</button> --> */}
   
    <div className={styles.parentFlex}>
           <div>
         <input type="text" className={styles.input} placeHolder="Music-title"/>
        <input type="text"className={styles.input} placeHolder="url link"/><br/>
       </div>
      <div>
          <input type="file" style={{color: "white;"}} onChange={handleChange} className={styles.file}/>
          <label for="file"><img src={images} className={styles.label} width="200px"  style={{borderRadius:"50px;"}}/></label>
      </div>
    </div>
    <center><p className={styles.upload}>Click the image above to upload your cover art.</p></center>
    <button className={styles.issubmitted}>Submit</button>
    </form>
 <button className={styles.Preview} style={{marginTop:"30px"}} onClick={()=>{
   setIsvisible(!isvisible);
   setInputval(inputRef.current.value)
 }}>Preview</button>




    <div className={styles.previewPane} style={{display : isvisible ? "block" : "none"}}>
  <img src={image} className="uploaded_img" alt="" width={"300px"} height={"300px"}/>
  <p>{inputval}</p>
  <button className={styles.done} onClick={()=>{
    setIsvisible(false)
  }}>Done</button>
</div>
</div>
</>
    )
}

export default Promote