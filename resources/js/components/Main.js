import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./employee/Form"
import List from "./employee/List"
import Edit from "./employee/Edit"
import StudentForm from "./employee/StudentForm"


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../FrontEnd/Home';
import ReactTableDemo from './employee/ReactTableDemo';
import StudentList from './employee/StudentList';
import NotFound from './NotFound';

  
function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        
        <Switch>
          <Route exact path="/"   component={Home} />
          <Route exact path="/employee/list"  component={List} />
          <Route exact path="/employee/form"  component={Form} />
          <Route exact path="/employee/edit/:id" component={Edit} />
          <Route exact path="/student/StudentForm"  component={StudentForm} />
          <Route exact  path="/student/list"  component={StudentList}   /> 
          
          <Route exact  path="/employee/table"  component={ReactTableDemo} />

          <Route   component={NotFound}/>
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById('root'));
