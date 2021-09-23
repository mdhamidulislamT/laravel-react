import React, { useEffect, useState } from 'react';
import employeeServices from '../services/Employee'
import { Link, useHistory } from "react-router-dom";

function List(){

  let history = useHistory();
  const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(() =>{

    fetchDataEmployee();
    // fetchDataStudent();

  }, [])

//----get students-list from laravel-course----//
  // const fetchDataStudent = async ()=>{
  //   const res = await employeeServices.listStudent();
  //   console.log(res)
  // }



  const fetchDataEmployee = async ()=>{
    const res = await employeeServices.listEmployee();
    console.log(res.data);
    //console.log(res.data);
    setListEmployee(res.data);
  }

  //--When delete button is clicked --//
  const onClickDelete = async (i,id) => {

    // var yes = confirm("are You sure to delete this item ?="+id);
    // if (yes === true){

      const res = await employeeServices.delete(id)

      if (res.success) { 
        const newList = listEmployee
        newList.splice(i,1)
        setListEmployee(newList);
        fetchDataEmployee();
        //alert(res.message);
      }
    //   else{
    //     //alert(res.message);
    //   }
    // // }
    //-End delete button--//

  }

  return (
    <section>
              <h4 className="text-center bg-warning p-3">Emplyee List</h4>
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
            <th scope="col"> Actions </th>
          </tr>
        </thead>
        <tbody>

          {
            listEmployee.map((item, i)=>{
              return (
                <tr>
                <th scope="row">{item.id}</th>
                <td> {item.name_lastname} </td>
                <td> {item.email} </td>
                <td> {item.city} </td>
                <td> {item.direction} </td>
                <td> 0{item.phone} </td>
                <td>  {item.rol_name} ( {item.rol} ) </td>
                
                <td className="d-flex">
                  <Link class="btn btn-outline-info " to={"/employee/edit/"+item.id}> Edit </Link>  
                  <a class="btn btn-danger" onClick={()=>onClickDelete(i,item.id)}> Delete </a>                 
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
