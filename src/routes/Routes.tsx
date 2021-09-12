import { Route, Switch } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import LandingPage from "pages/LandingPage";
import EmployeesPage from "pages/EmployeesPage";

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route exact path={["/employees/new-employee", "/employees"]} component={EmployeesPage} />
      <Route exact path="/absences" component={LandingPage} />
      <Route exact path="/" component={LandingPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
