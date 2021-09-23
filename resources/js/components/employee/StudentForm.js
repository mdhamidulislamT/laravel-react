
import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import employeeServices from '../services/Employee';
import studentServices from '../services/StudentService'

function StudentForm(){
  const [stdName, setName] = useState(null);
  const [stdEmail, setEmail] = useState(null);
  const [stdDistrict, setDistrict] = useState(null);  
  const [stdGender, setGender] = useState(null);
  const [stdPhone, setPhone] = useState(null);
  const [stdImage, setImagefile] = useState(null);
  const [stdClass, setClass] = useState(null);

  const [classes, setClasses] = useState([]);
  const history = useHistory();

  useEffect(() => { 

    fetchStudentList();

  },[]);

  async function fetchStudentList() {
    // load data  from API
    const res = await studentServices.class();
    //console.log(res.data)
    setClasses(res.data)
  }


  const saveStudent = async () => {
    const data = {
      stdName, stdEmail, stdDistrict, stdGender, stdPhone, stdImage, stdClass
    }
   //console.log(data);
   let formData = new FormData();
   for (const key in data) {
    formData.append(key, data[key]);
   }
    const res = await studentServices.store(formData);

    if (res.success) {
      alert(res.message)
      history.push('/');
    }
    else {
      alert(res.message)
    }
  }
  
  console.log(classes)
  return(
    <div>
                    <h4 className="text-center bg-warning p-3">Student Information Form</h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">Student Name</label>
          <input type="text" className="form-control" placeholder="Name" 
          onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" 
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="phone">District </label>
          <select id="inputState" className="form-control" onChange={(event)=> setDistrict(event.target.value)}>
             <option selected>Choose...</option>
             <option value="Chittagong">Chittagong</option>
             <option value="Dhaka">Dhaka</option>
             <option value="Comilla">Comilla</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="phone">Phone </label>
          <input type="number" className="form-control" placeholder="123467890"
          onChange={(event)=>setPhone(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
					<label htmlFor="phone">Class </label>
					<select id="inputState" className="form-control"  onChange={(event)=>setClass(event.target.value)}>
             {
               classes.map((classs)=>{
                 return(
                   <option value={classs.class_id}>{classs.class_name}</option>
                 )
               })
             }

          </select>
        </div>
      </div>
      
    <div className="container d-flex">
    <label htmlFor="phone">Gender : </label>
      <div className="form-check"><label className="form-check-label mr-4" htmlFor="flexRadioDefault2">
  Male
  </label>
  <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="male"
  onChange={(event)=>setGender(event.target.value)} />
  
</div>
<div className="form-check">
<label className="form-check-label mr-4" htmlFor="flexRadioDefault2">
  Female
  </label>
  <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female"
  onChange={(event)=>setGender(event.target.value)}/>
  
</div>
    </div>

<div className="w-25">
<label className="form-label mt-2" htmlFor="customFile">Upload file</label>
<input type="file" className="form-control" id="customFile" 
onChange={(event)=>setImagefile(event.target.files[0])}/>
</div>

      <div className="row mt-3">
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit"
          onClick={()=>saveStudent()}>Save Now</button>
        </div>
      </div>
    </div>
  )
}

export default StudentForm