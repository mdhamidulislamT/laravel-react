
import { Fragment } from "react";
import { __RouterContext } from "react-router";
import { Switch, Route} from "react-router-dom";
import Edit from "../components/employee/Edit";
import Form from "../components/employee/Form";
import List from "../components/employee/List";
import ReactTable from "../components/employee/ReactTableDemo";
  
function AppRoute(){
  return (
    <Fragment>

      <Nav/>
        <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/Edit" component={Edit} />
            <Route exact path="/Edit" component={Edit} />
            <Route exact path="table" component={ReactTable} />
        </Switch>

    </Fragment>
  )
}

export default AppRoute;
