import React from 'react'
import { Link } from 'react-router-dom'
import Name from './Name';

export default function Customer(props) {



  return (



    <Link to="/Name">



    <div style={{width: "350px", height: "500px", border: "1px solid black"}}>

        <h3>Id:<h2>{props.id}</h2></h3>
        <h3>FullName:<h2>{props.fullName}</h2></h3>
        <h3>Password:<h2>{props.password}</h2></h3>
        <h3>MaritalStatus:<h2>{props.maritalStatus}</h2></h3>

    </div>

    </Link>


  )


}

