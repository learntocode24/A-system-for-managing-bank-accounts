import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css"

export default function Admin(props) {

  return (

    <div>

      <h1>This account was not found. The account does not exist or you have removed it from the database. If you do not have an account, please go to the registration page to enter him to the system.</h1>

      <Link to="/"><button className='btn2' style={{backgroundColor: "#ff9f00"}}>GO back to homePage</button></Link>

    </div>


  )

}

