import { css } from "@emotion/react";
import Wrapper from "components/Wrapper";
import { Route, Switch } from "react-router";
import Employees from "./Employees";
import { EmployeeCurveSvg, EmployeesContainer, HeaderButtonLink } from "./employeesPage.styles";
import NewEmployees from "./NewEmployees";

export default function Routes(): React.ReactElement {
  const moreLinkItems = [
    <HeaderButtonLink color="secondary" key="new-employee-button-link" to="/employees/new-employee">
      New Employee
    </HeaderButtonLink>,
  ];

  return (
    <Wrapper
      headerProps={{
        moreLinkItems,
        navProps: {
          css: css`
            padding-right: 64px;
          `,
        },
      }}
    >
      <EmployeesContainer>
        <EmployeeCurveSvg />

        <Switch>
          <Route exact path="/employees/new-employee" component={NewEmployees} />
          <Route exact path="/employees" component={Employees} />
        </Switch>
      </EmployeesContainer>
    </Wrapper>
  );
}
