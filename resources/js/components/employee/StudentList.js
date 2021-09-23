import { useEffect, useState } from "react";
import Loading from "../../pages/Loading";
import employeeServices from '../services/Employee';

const StudentList =()=>{

    const [studentList, setStudentList] = useState([]);

    useEffect(()=>{

        fetchStudentList();
    },[]);

//----get students-list from laravel-course----//
  const fetchStudentList = async ()=>{
    const res = await employeeServices.listStudent();
    //console.log(res);
    setStudentList(res.data);
  }


    if (!studentList) {
        return <Loading/>
    }
    return (
        <section>
        <h4 className="text-center bg-warning p-3">(api) Student List (Data from laraval-course)</h4>
            <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"> # </th>
                    <th>ID</th>
                    <th scope="col"> Name </th> 
                    <th scope="col">Class</th>
                    <th scope="col"> Roll </th>
                    <th scope="col"> Created_at </th>
                    <th scope="col"> Updated_at </th>
                    <th scope="col"> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                    studentList.map((item, i)=>{
                        return (
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{item.id}</td>
                                    <td> {item.name} </td>
                                    <td>{item.class}</td>
                                    <td>{item.roll}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.updated_at}</td>
                                    <td>
                                        <button className="btn btn-info">Edit</button> 
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                        )
                    })

                }
            
            </tbody>
            </table>
</section>
    );


}


export default StudentList;