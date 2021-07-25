import React, { useEffect, useState } from 'react';
import employeeServices from '../services/Employee';



function Edit(props){

  const [ id , setId] = useState(null);
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


  useEffect(()=>{
  async function fetcthDataEployee(){
    let id = props.match.params.id;
    console.log(id);

    const res = await employeeServices.get(id);
    console.log(res);    
    
    setId(res.data.id)
    setName(res.data.name_lastname)
    //console.log(res.data.name_lastname)
    setEmail(res.data.email)
    setCity(res.data.city)
    setAddress(res.data.address)
    setPhone(res.data.phone)
    setRol(res.data.rol)


    if (res.success) {
     console.log(res.data);   

    } else {
      // alert(res.message);
    }

  }


  fetcthDataEployee();

  }, [])
  

  //when save button is clicked, this saveEmployee WORKs--//
  const updateEmployee = async () => {
    const data = {
      id ,name, email, city, address, phone, rol
    }
    console.log(data)
    const res = await employeeServices.update(data);

    if (res.success) {
      alert(res.message)
    }
    else {
      alert(res.message)
    }
  }


  return (
    <div>
      <h4>Edit customer {props.match.params.id}  </h4>
      <hr/>
      <input type="hidden" name="id"  value={id} />
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Name employee</label>
          <input type="text" className="form-control" name="name" value={name} onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" className="form-control" name="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">City </label>
          <select id="inputState" value={city} name="city" class="form-control" onChange={(event)=> setCity(event.target.value)} >
             <option value="London">London</option>
             <option value="Madrid">Madrid</option>
             <option value="New York">New York</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" name="address" className="form-control" placeholder="1234 Main St" onChange={(event)=>setAddress(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Phone </label>
          <input type="text" className="form-control" name="phone" value={phone} onChange={(event)=>setPhone(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
					<label for="phone">Rol </label>
					<select id="inputState" value={rol} name="rol" class="form-control" onChange={(event)=> setRol(event.target.value)}>
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
        <div className="col-md-6 mb-3">
          <button onClick={updateEmployee} className="btn btn-primary btn-block" type="submit"> Now Update </button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
