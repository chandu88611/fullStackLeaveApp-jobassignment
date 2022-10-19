import React from 'react'
import "./content.css"
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineDelete} from "react-icons/ai";
import UpdateForm from './Update'
import { FiEdit} from "react-icons/fi";
function Content({value}) {
    const [state,setState]=useState([])
    
    const [id,setId]=useState(null)
    
    const [updateId,setUpdateId]=useState(null)
    const request= async ()=>{
        const res= await axios.get('http://localhost:5000/').catch((err)=>console.log(err))
          const data= await res.data.leaves
        return data
     
    //   console.log(data.data.leaves)
        }
        const remove= async (id)=>{
        const res=  await axios.delete(`http://localhost:5000/${id}`).catch((err)=>console.log(err))
          
          const data= await res.data.leaves
          return data
        //   console.log(data.data.leaves)
            }
        useEffect(()=>{
  request().then((data)=>{setState(data)})
  console.log(state)
        },[])
        useEffect(()=>{
     
    
        // window.location.reload()
        },[id])
  return (
   <div>   <div className='table_container'>
  <div className="line1"> <h2> Dashboard</h2>    <button  onClick={()=>value(!false)}>Apply leave</button></div>
   <div className="table_div">
          <table className='table'>
              <tr className='tr'>
                  <th className='th'>Name</th>
                  <th className='th'>LeaveType</th>
                  <th className='th'>StartDate</th>
                  <th className='th'>EndDate</th>
                  <th className='th'>delete/Edit</th>
                  {/* <th className='th'> comments</th> */}
              </tr>

            {  state.map((data)=>(
                <tr className='tr1'> 
                  <td className='td'>{data.user}</td>
                  <td className='td'>{data.leaveType}</td>
                  <td className='td'>{data.startDate}</td>
                  <td className='td'>{data.endDate}</td>
                  <td className='td'> <AiOutlineDelete color="red"
                  onClick={()=>{setId(data._id)}}/> <FiEdit   onClick={()=>{setUpdateId(data._id)}}
                    color='blue'
                  /></td>
              </tr>
            ))
              
           }
              
           
          </table>
            

          </div>
{
        id?  <div className="delete_container">
      <h4> Are You Sure want to Delete</h4>

<button onClick={()=>{remove(id)
window.location.reload()
}}>Confirm</button><button onClick={()=>{setId(null)}}>cancel</button>
    </div>:''}

{updateId?<UpdateForm   id={updateId} value={setUpdateId}/>:''}

      </div></div>

    
  )


   
  
}

export default Content