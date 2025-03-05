import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Accounts = () => {
    let [content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/Accounts")
        .then((response)=>{setContent(response.data)})
        .catch(()=>{console.log("ERROR IN FETCHING THE DATA");})
    },[])

    let deleteAccount=(id)=>{
        axios.delete(`http://localhost:3000/Accounts/${id}`)
        window.location.assign("/accounts") 
    }

  return (
        <div>
            {
                content.map((x)=>{
                    return(
                        <div>
                            <h1>name: {x.userName}</h1>
                            <h1>ACNO :{x.AccountNumber}</h1>
                            <h1>num: {x.MobileNumber}</h1>
                            {/* <button><Link to="/edit/${x.id}">EDIT</Link></button> */}
                            <button><Link to={`/edit/${x.id}`}>EDIT</Link></button>
                            <button onClick={()=>{deleteAccount(x.id)}}>DELETE</button>
                        </div>
                    )
                })
            }
        </div>
    
  )
}

export default Accounts


// {
//     content.map((x)=>{
//         return(
//             <div>
//                 <h1>name : {x.UserName}</h1>
                
//             </div>
//         )
//     })