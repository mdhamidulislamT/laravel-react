const baseUrl = "http://127.0.0.1:8030/api/student";
import axios from 'axios';
 const student = {}

 student.store = async (data)=>{

    const urlStore = baseUrl;
    const res = await axios.post(urlStore, data)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
  
  }

  student.class = async ()=>{

    const urlClass = baseUrl;
    const res = await axios.get(urlClass)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
  
  }





  export default student