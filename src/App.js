import logo from './logo.svg';
import './App.css';
import MainPage from './compoments/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Name from './compoments/Name';
import Admin from './compoments/Admin';
import Register from './compoments/Register';
import Customer from './compoments/Customer';
import { useState } from 'react';
import AllCustomer from './compoments/AllCustomer';


function App() {

  const [customerArr, setCustomerArr] = useState([])



   const addNewCustomer = (id, fullName, password, maritalStatus) => {


   let customerTemp = new Customer (id, fullName, password, maritalStatus);


   setCustomerArr([...customerArr, customerTemp])
   

  }



  
  class Customer {


    constructor(id, fullName, password, maritalStatus) {

      this.id = id;

      this.fullName = fullName;

      this.password = password;

      this.maritalStatus = maritalStatus;

      this.expenses = []; 

    }

  
    addExpense (companyName, sumOfMoney) {

      this.expenses.push({ companyName, sumOfMoney });

    }

  }




  return (



    <div className="App">


      <BrowserRouter>



      <AllCustomer customerList = {customerArr}/>

      

      






      <Routes>


        <Route path='/' element={<MainPage/>}/>

        <Route path='Name' element={<Name/>}/>

        <Route path='Admin' element={<Admin/>}/>

        <Route path='Register' element={<Register addNewCustomer = {addNewCustomer}/>}/>

        <Route path='AllCustomer' element={<AllCustomer customerList = {customerArr}/>}/>

        <Route path='Customer' element={<Customer/>}/>


      </Routes>
      
      
      
      
      
      
      </BrowserRouter>




    </div>

  );

}


export default App;



