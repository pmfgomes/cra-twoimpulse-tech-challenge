import styled from "@emotion/styled";
import { darken, rgba } from "polished";
import Avatar from "react-avatar";
import { EmployeeCardProps } from "types/components/employeeCard";

export const Card = styled.div<EmployeeCardProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-sizing: border-box;
  width: 650px;
  box-shadow: ${rgba("#000", 0.1)} 0px 0px 6px 0px;

  visibility: ${({ visible }) => !visible && "hidden"};
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 24px;
  width: 100%;

  border-bottom: 2px solid #c4c0f9;
`;

export const CardHeaderAvatar = styled(Avatar)`
  margin-right: 32px;
`;

export const CardHeaderEmployeeInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
`;

export const CardHeaderEmployeeName = styled.strong`
  font-family: "Poppins", sans-serif;

  color: #4b4c59;
  font-size: 18px;
  font-weight: 700;
`;

export const CardHeaderEmployeeId = styled.p`
  margin: 0;
  color: #9e9caa;
  font-size: 16px;
  font-weight: 500;
`;

export const CardHeaderActions = styled.div`
  display: flex;
  gap: 16px;

  svg {
    font-size: 26px;
    color: #a4afb7;
    cursor: pointer;
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      color: ${darken(0.2, "#a4afb7")};
    }

    &:active {
      opacity: 0.5;
    }
  }
`;

export const CardContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 16px 24px;
  gap: 8px;
  height: 180px;

  label {
    color: #9e9caa;
    font-weight: 500;
    margin-right: 8px;
  }

  input {
    width: 100%;
  }
`;

export const CardFormHiddenButton = styled.button`
  display: none;
`;
