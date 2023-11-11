import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Name.css";

export default function Name(props) {

  return (

    <div>

      <h1>Welcome!</h1> <br/>

      <Link to="/"><button className='btn3' style={{backgroundColor: "#ff9f00", border: "1px solid black" , width: "150px", height: "50px"}}>Exit</button></Link> 

    </div>

  )
  
}
