import { css } from "@emotion/react";
import Wrapper from "components/Wrapper";
import { useEffect, useState } from "react";
import useStore from "store";
import {
  EmployeeTitleContainer,
  EmployeesContainer,
  HeaderButtonLink,
  EmployeeTitle,
  RightSquare,
  EmployeeTitleRightSquareContainer,
  EmployeeFooter,
  FooterPinkSquare,
  EmployeeCardsContainer,
} from "./employees.styles";
import EMPLOYEE_DATA from "mocks/employeeData";
import EmployeeCard from "components/EmployeeCard";

export default function Employees(): React.ReactElement {
  const employeesList = useStore(store => store.employeesList);
  const setEmployeesList = useStore(store => store.setEmployeesList);

  const [loadingData, setLoadingData] = useState(true);

  const moreLinkItems = [
    <HeaderButtonLink key="new-employee-button-link" to="/employees">
      New Employee
    </HeaderButtonLink>,
  ];

  const getEmployeeData = () => {
    setTimeout(() => {
      setEmployeesList(EMPLOYEE_DATA);
      setLoadingData(false);
    }, 500);
  };

  useEffect(() => {
    if (!employeesList) {
      getEmployeeData();
    } else {
      setLoadingData(false);
    }
  }, []);

  const content = () => {
    if (loadingData) {
      return <div>Loading data...</div>;
    }

    const isEmployeesListLengthOdd =
      employeesList && employeesList.length > 0 && !!(employeesList.length & 1);

    return (
      <EmployeeCardsContainer>
        {employeesList?.map(employee => (
          <EmployeeCard key={`employee-card-${employee.id}`} data={employee} />
        ))}
        {isEmployeesListLengthOdd && <EmployeeCard visible={false} />}
      </EmployeeCardsContainer>
    );
  };

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
        <EmployeeTitleContainer>
          <EmployeeTitle>Team</EmployeeTitle>
          <EmployeeTitleRightSquareContainer>
            <RightSquare />
          </EmployeeTitleRightSquareContainer>
        </EmployeeTitleContainer>
        {content()}
        <EmployeeFooter>
          <FooterPinkSquare />
        </EmployeeFooter>
      </EmployeesContainer>
    </Wrapper>
  );
}
