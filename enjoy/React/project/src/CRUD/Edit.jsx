import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    let [username,setUserName]=useState("")
    let[Accountnumber,setAccountNumber]=useState("")
    let[Mobilenumber,setMobileNumber]=useState("")


    let obj = useParams()

    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/Accounts/${obj.id}`)
        .then((response)=>{
            setUserName(response.data.userName)
            setAccountNumber(response.data.AccountNumber)
            setMobileNumber(response.data.MobileNumber)
        })
        .catch(()=>{console.log("ERROR");})
    },[])

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

        
        axios.put(`http://localhost:3000/accounts/${obj.id}`,payload)
        .then(()=>{console.log("got the Data")})
        .catch(()=>{console.log("Erroorr");})

        navigate("/accounts")

    }
  return (
    
    <div>
        <form action="">
            <h1>EDIT USER</h1>
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

export default Edit