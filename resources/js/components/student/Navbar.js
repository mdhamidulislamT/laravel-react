import react from 'react'
import   {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import ListStudent from './ListStudent'
import { BrowserRouter as Router, Route} from "react-router-dom";


function Navbar(){

    return(
        
        <Router>
             <Route  path="/lis"  component={ListStudent}   />
             <Route  path="/fr"  component={CreateStudent}   />


        </Router>
        
    );
}


export default Navbar