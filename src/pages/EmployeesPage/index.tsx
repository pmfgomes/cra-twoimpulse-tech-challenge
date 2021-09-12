import { Route, Switch } from "react-router";
import Employees from "./Employees";

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      {/* <Route exact path="/employees/new-employee" component={NewEmployees} /> */}
      <Route exact path="/employees" component={Employees} />
    </Switch>
  );
}
