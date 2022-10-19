import React from 'react'
// import { useEffect } from "react";

import axios from 'axios'
import { useState } from "react";

import "./Leaveform.css"
function UpdateForm({value,id}) {
    const [inputs,setInputs]=useState({
      user:'',
        leaveType:'',
   startDate:'',
   endDate:'',
comments:''

    })


    const request= async ()=>{
      const res= await axios.put(`http://localhost:5000/${id}`,{
        user:inputs.user,
        leaveType:inputs.leaveType,
          startDate:inputs.startDate
          ,endDate:inputs.endDate,
          comments:inputs.comments
        }).catch((err)=>console.log(err))
        const data= await res
        return data
    
      }
    const handleSubmit=(e)=>{
        e.preventDefault()
        request().then((data)=>console.log(data))
        console.log(inputs)
        window.location.reload()
        }
  
//     const [type,setType]=useState("")
    
  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  return (
    <div className='container'>
    <form action="submit" onSubmit={handleSubmit}>
    <div className="input_container"><h4>Employee name:</h4><input type="text" name='user' value={inputs.user} onChange={handleChange }/></div>

    <div className="leave_type">
    
    <h4>Leave Type: </h4><select name="leaveType"   value={inputs.leaveType} onChange={handleChange} >
   <option value="Sick">Sick</option>
   <option value="Casual">Casual</option><option value="Earned">Earned</option>
    </select></div>
    <div className="input_container">
   <h4>Start Date:</h4><input type="date" name='startDate' value={inputs.startDate} onChange={handleChange }/></div>

<div className="input_container">
<h4>End Date:</h4><input type="date" name='endDate' value={inputs.endDate} onChange={handleChange  }/></div>
<div className="comments"> <h4>Comments:</h4>
      <textarea rows="5" cols="60" name="comments"  value={inputs.comments}
       placeholder="Enter text" onChange={handleChange  } ></textarea>
</div>
  <div className="but_div"><button type='submit'>save</button><button 
  onClick={()=>value(false)}
  >cancel</button></div> 
</form>
    </div>
  )
}

export default UpdateForm