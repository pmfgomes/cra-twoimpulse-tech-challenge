import EmployeePageTitle from "./EmployeePageTitle";
import { EmployeeFooter } from "./employeesPage.styles";

export default function NewEmployees(props): React.ReactElement {
  const content = () => {
    return <div>content</div>;
  };

  return (
    <>
      <EmployeePageTitle title="New Employee" />
      {content()}
      <EmployeeFooter />
    </>
  );
}
