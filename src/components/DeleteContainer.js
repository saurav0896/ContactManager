import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteContainer = (props) => {
    const [ email , setEmail] = useState("")
    let location = useLocation()
    let userDetail = location.state.contact
    let navigate = useNavigate()

    const setEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const confirmValue = () => {
        if(email === userDetail.email && email !== ""){
            props.getContactDetail(userDetail.id)
            navigate("/")
        }
        else if (email === ""){
            alert("Please Enter a value")
        }
        else {
            alert(`Entered value ${email} does not match`)
        }
    }

    const goBacktoMain = () => {
          navigate("/")
    }
     return (
       <div className="ui card" style={{width:"100%"}}>
           <div className="content">
               <div>
                  Type the exact name <strong style={{color: "red"}}>{userDetail.email}</strong> and press <strong>Confirm</strong> to delete.
               </div>
               <br/>
               <div className="ui input focus" style={{marginBottom:"10px",width:"70%"}}>
                 <input type="email" placeholder="Type your value here..." value={email} className="" onChange={setEmailHandler}  />
               </div>
               <br/>
               <button className="ui button red" onClick={confirmValue}>Confirm</button>
               <button className="ui button grey" onClick={goBacktoMain}>Cancel</button>
           </div>
           
       </div>  
     )
}


export default DeleteContainer