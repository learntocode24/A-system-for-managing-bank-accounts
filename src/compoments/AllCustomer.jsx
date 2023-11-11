import React from 'react'
import Customer from './Customer'
import Name from './Name'
import Admin from './Admin'

export default function AllCustomer(props) {

  return (

    <div>


        {props.customerList.map((val)=>{

        return <Customer id = {val.id} fullName = {val.fullName} password = {val.password} maritalStatus = {val.maritalStatus} expenses = {val.expenses}/>

        })}


    </div>


  )


}
