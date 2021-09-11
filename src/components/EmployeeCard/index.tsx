import {
  Card,
  CardHeader,
  CardHeaderActions,
  CardHeaderEmployeeId,
  CardHeaderEmployeeInfo,
  CardHeaderEmployeeName,
  CardHeaderAvatar,
} from "./employeeCard.styles";
import { MdEdit, MdClose } from "react-icons/md";
import { css } from "@emotion/react";

export default function EmployeeCard(props: EmployeeCardProps): React.ReactElement {
  const { data, visible = true } = props;

  return (
    <Card
      css={
        !visible &&
        css`
          opacity: 0;
        `
      }
    >
      <CardHeader>
        <CardHeaderAvatar src={data?.profilePhoto} size="78" round />
        <CardHeaderEmployeeInfo>
          <CardHeaderEmployeeName>{data?.name}</CardHeaderEmployeeName>
          <CardHeaderEmployeeId>Employee ID: {data?.id}</CardHeaderEmployeeId>
        </CardHeaderEmployeeInfo>
        <CardHeaderActions>
          <MdEdit />
          <MdClose />
        </CardHeaderActions>
      </CardHeader>
    </Card>
  );
}
