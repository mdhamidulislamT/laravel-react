import React, { useEffect, useState } from 'react';
import employeeServices from '../services/Employee'
import { Link } from "react-router-dom";


function List(){

  const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(() =>{
   
    fetchDataEmployee();
  
  }, [])

  const fetchDataEmployee = async ()=>{
    const res = await employeeServices.listEmployee();
    console.log(res.data);
    setListEmployee(res.data);
  }

  return (
    <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> # </th>
            <th scope="col"> Name </th> 
            <th scope="col"> Email </th>
            <th scope="col"> City </th>
            <th scope="col"> Address </th>
            <th scope="col"> Phone </th>
            <th scope="col"> Role </th>
            <th scope="col"> Actionssss </th>
          </tr>
        </thead>
        <tbody>

          {
            listEmployee.map((item)=>{
              return (
                <tr>
                <th scope="row">{item.id}</th>
                <td> {item.name_lastname} </td>
                <td> {item.email} </td>
                <td> {item.city} </td>
                <td> {item.direction} </td>
                <td> {item.phone} </td>
                <td> {item.rol} </td>
                
                <td>
                  <Link class="btn btn-outline-info" to={"/employee/edit/"+item.id}>Edit</Link>
                  <a href="#" class="btn btn-danger"> Delete </a>
                </td>
              </tr>
              )
            })
          }
        
         
        </tbody>
      </table>
    </section>
  )
}

export default List;
