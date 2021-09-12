import { useEffect, useState } from "react";
import useStore from "store";
import { EmployeeFooter, FooterPinkSquare, EmployeeCardsContainer } from "./employeesPage.styles";
import EMPLOYEE_DATA from "mocks/employeeData";
import EmployeeCard from "components/EmployeeCard";
import EmployeePageTitle from "./EmployeePageTitle";

export default function Employees(): React.ReactElement {
  const employeesList = useStore(store => store.employeesList);
  const setEmployeesList = useStore(store => store.setEmployeesList);

  const [loadingData, setLoadingData] = useState(true);

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
    <>
      <EmployeePageTitle title="Team" />
      {content()}
      <EmployeeFooter>
        <FooterPinkSquare />
      </EmployeeFooter>
    </>
  );
}
