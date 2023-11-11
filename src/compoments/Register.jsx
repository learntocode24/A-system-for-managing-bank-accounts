import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Customer from './Customer'
import "./Register.css";

export default function Register(props) {

    const[id, setId] = useState("")

    const[fullName, setFullName] = useState("")

    const[password, setPassword] = useState("")

    const[confirmPassword, setConfirmPassword] = useState("")

    const[maritalStatus, setMaritalStatus] = useState("")





    const clientDeatails = () => {



    if (id.length !== 9) 
    
    {
        alert("Try again - id");
        return;
    }


    else if(fullName.length <= 4)

    {
        alert("Try again - userName");
        return;
    }



    else if(password.length !== 6)

    {
        alert("Try again - password");
        return;
    }


     else if(password !== confirmPassword)

    {
        alert("Try again - confirm password");
        return;
    }


    else if (maritalStatus < 0 || maritalStatus > 1000000) 
    
    {
        alert("Try again - money");
        return;
    }


    else

    {

        props.addNewCustomer(id, fullName, password, maritalStatus)

    }

}



  return (


    <div>

        <h1>Register</h1>


        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setId(e.target.value)}} type='text' placeholder='ID'></input> <br/> <br/>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setFullName(e.target.value)}} type='text' placeholder='User Name'></input> <br/> <br/>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setPassword(e.target.value)}} type='text' placeholder='password'></input> <br/> <br/>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setConfirmPassword(e.target.value)}} type='text' placeholder='Confirm Password'></input> <br/> <br/>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setMaritalStatus(e.target.value)}} type='text' placeholder='Money'></input> <br/>  <br/>

        <Link to="AllCustomer"><button className='btn1' onClick={clientDeatails} style={{backgroundColor: "#ff9f00"}}>Create</button></Link>
    

    </div>
  )


}
