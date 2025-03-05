import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Createaccount = () => {
    let [username,setUserName]=useState("")
    let[Accountnumber,setAccountNumber]=useState("")
    let[Mobilenumber,setMobileNumber]=useState("")

    let navigate =useNavigate()

    let getuserName =(e)=>{
        // console.log(e.target.value);
        setUserName(e.target.value)
    }
    let getAccountNumber =(e)=>{
        // console.log(e.target.value)
        setAccountNumber(e.target.value)
    }
    let getMobileNumber =(e)=>{
        // console.log(e.target.value)
        setMobileNumber(e.target.value)
    }

    let formhandle =(e)=>{
        e.preventDefault()
        console.log(username,Accountnumber,Mobilenumber)


        let payload={
            userName:username,
            AccountNumber:Accountnumber,
            MobileNumber:Mobilenumber
        }

        
        axios.post("http://localhost:3000/accounts",payload)
        .then(()=>{console.log("got the Data")})
        .catch(()=>{console.log("Erroorr");})

        navigate("/accounts")

    }
  return (
    <div>
        <form action="">
            <label htmlFor="">User Name</label><br />
            <input type="text" value={username} onChange={getuserName}/ ><br />
            <label htmlFor="">Account Number</label><br />
            <input type="text" value={Accountnumber} onChange={getAccountNumber} /><br />
            <label htmlFor="">Mobile Number</label><br />
            <input type="text" value={Mobilenumber} onChange={getMobileNumber}/><br />
            <button onClick={formhandle}>Submit</button>
        </form>
    </div>
  )
}

export default Createaccount