import React, { useEffect, useState,  } from 'react';
import { useHistory } from "react-router-dom";
import employeeServices from '../services/Employee';
  
function Form(){

  let history = useHistory();


  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ city, setCity ] = useState(null);
  const [ address, setAddress ] = useState(null);
  const [ phone, setPhone ] = useState(null);
  const [ rol, setRol ] = useState(null);
  const [ listRol, setListRol ] = useState([]);

  useEffect(() => {
    async function fetchDataRol() {
      // load data from API
      const res = await employeeServices.list();
      setListRol(res.data)
    }

    fetchDataRol();
  
  },[]);

  

  //when save button is clicked, this saveEmployee WORKs--//
  const saveEmployee = async () => {
    const data = {
      name, email, city, address, phone, rol
    }
    console.log(data)
    const res = await employeeServices.save(data);

    if (res.success) {
      history.push("/employee/list");
    }
    else {
      alert("Not Save")

    }
  }

  return(
    <div>
        <h4 className="text-center bg-warning p-3">Emplyee Form</h4>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <label for="firstName">Name employee</label>
          <input type="text" name="name" className="form-control" placeholder="Name" onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>

      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" name="email"  className="form-control" placeholder="you@example.com"  onChange={(event)=>setEmail(event.target.value)} />
        </div>
      </div>

      <div class="row">
      <div className="col-md-3"></div>
        <div class="col-md-6 mb-3">
          <label for="phone"> City </label>
          <select id="inputState" name="city" class="form-control" onChange={(event)=> setCity(event.target.value)}>
             <option selected>Choose...</option>
             <option value="London">London</option>
             <option value="Madrid">Madrid</option>
             <option value="New York">New York</option>
          </select>
        </div>
      </div>

      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" name="address" className="form-control" placeholder="1234 Main St" onChange={(event)=>setAddress(event.target.value)} />
        </div>
      </div>

      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <label for="phone">Phone </label>
          <input type="text" name="phone"  className="form-control" placeholder="123467890" onChange={(event)=>setPhone(event.target.value)} />
        </div>
      </div>

      <div class="row">
      <div className="col-md-3"></div>
        <div class="col-md-6 mb-3">
					<label for="phone">Rol </label>
					<select id="inputState" name="rol" class="form-control" onChange={(event)=> setRol(event.target.value)} >
             <option>Choose...</option>
             {
               listRol.map((item)=>{
                 return(
                   <option value={item.rol_id}>{item.rol_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>


      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit" onClick={saveEmployee} >Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
