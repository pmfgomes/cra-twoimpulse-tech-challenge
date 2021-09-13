import useStore from "store";
import { EmployeeFooter, FooterPinkSquare, EmployeeCardsContainer } from "./employeesPage.styles";
import EmployeeCard from "components/EmployeeCard";
import EmployeePageTitle from "./EmployeePageTitle";

export default function Employees(): React.ReactElement {
  const employeesList = useStore(store => store.employeesList);

  const content = () => {
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
