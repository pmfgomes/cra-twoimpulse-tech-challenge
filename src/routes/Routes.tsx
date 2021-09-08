import { Route, Switch } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import LandingPage from "pages/LandingPage";

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
