//const baseUrl = "http://localhost:8000/api/employee"
const baseUrl = "http://127.0.0.1:8000/api/employee"
import axios from "axios";
const employee = {};

// get rol_id & rol_name
employee.list = async () => {
  const urlList = baseUrl+"/role"
  const res = await axios.get(urlList)
  .then(response=> {return response.data; })
  .catch(error=>{ return error; })
  return res;
}

// employee.listRole = async () => {
//   const urlList = baseUrl+"/list"
//   const res = await axios.get(urlList)
//   .then(response=> {return response.data })
//   .catch(error=>{ return error; })
//   return res;
// }


//--save--//
employee.save = async (data) => {
  const urlSave= baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

employee.listEmployee = async () => {
  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=> { return response.data; })
  .catch(error=> { return error; })
  return res;
}


//--edit--/
employee.get = async (id)=> {
  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//--update--//
employee.update = async (data) => {
  const urlUpdate= baseUrl+"/update"
  const res = await axios.post(urlUpdate, data)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

//...//

employee.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id;
  const res = await axios.delete(urlDelete)
  .then(response=> { return response.data })
  .catch(error =>{ return error })
  return res;
}



export default employee
