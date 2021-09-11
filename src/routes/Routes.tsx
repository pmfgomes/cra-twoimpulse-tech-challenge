import { Route, Switch } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import LandingPage from "pages/LandingPage";
import Employees from "pages/Employees";

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/new-employee" component={LandingPage} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/absences" component={LandingPage} />
      <Route exact path="/" component={LandingPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
