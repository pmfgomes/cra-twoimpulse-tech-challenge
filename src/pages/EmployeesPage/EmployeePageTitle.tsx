import {
  EmployeeTitle,
  EmployeeTitleContainer,
  EmployeeTitleRightSquareContainer,
  RightSquare,
} from "./employeesPage.styles";

interface EmployeePageTitleProps {
  title: string;
}

export default function EmployeePageTitle(props: EmployeePageTitleProps): React.ReactElement {
  const { title } = props;

  return (
    <EmployeeTitleContainer>
      <EmployeeTitle>{title}</EmployeeTitle>
      <EmployeeTitleRightSquareContainer>
        <RightSquare />
      </EmployeeTitleRightSquareContainer>
    </EmployeeTitleContainer>
  );
}
