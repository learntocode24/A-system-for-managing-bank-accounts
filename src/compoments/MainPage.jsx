import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import "./MainPage.css";

export default function MainPage(props) {


    const nav = useNavigate();



    const[nameAdmin, setNameAdmin] = useState("")

    const[passwordAdmin, setPasswordAdmin] = useState("")



     const handleLogin = () => {


        if (nameAdmin === '' || passwordAdmin === '') {

            alert("Please fill in the blank");

            return;

        }


        
        if (nameAdmin === '' && passwordAdmin === '')
        
        { 

            nav("/Name")
        } 
        
        
        else 
        
        {

            nav("/Admin");
        }

    };
    
    


   





  return (


    <div>

        <h1>sv-bank</h1>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setNameAdmin(e.target.value)}} type='text' placeholder='User Name'></input> <br/> <br/>

        <input style={{backgroundColor: "#ff9f00", border: "1px solid black"}} onChange={(e)=>{setPasswordAdmin(e.target.value)}} type='text' placeholder='Password'></input>

        <Link to="/Register"><p style={{color: "black"}}>Create new user</p></Link>

        <button className='btn' onClick={handleLogin} style={{backgroundColor: "#ff9f00"}}>Enter</button>


    </div>


  )


  }





