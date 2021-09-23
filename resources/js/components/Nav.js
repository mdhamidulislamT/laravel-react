import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary rounded">
        <div className="collapse navbar-collapse " id="navbarsExample09">
          <ul className="navbar-nav p-1 ">
          <li className="nav-item  p-2">
              <Link className="nav-link " to="/"> Home </Link>
            </li>
            <li className="nav-item  p-2">
              <Link className="nav-link " to="/employee/list">List  </Link>
            </li>
            <li className="nav-item p-2 text-light">
              <Link className="nav-link" to="/employee/form">Create</Link>
            </li>
            <li className="nav-item p-2">
               <Link className="nav-link" to="/employee/edit/5">Edit</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/student/StudentForm"> Create Student </Link>
            </li>
            <li className="nav-item  p-2">
              <Link className="nav-link " to="/student/list">Student List  </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to="/employee/table"> react-table </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    )
  }
}
