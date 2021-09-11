import styled from "@emotion/styled";
import { rgba } from "polished";
import Avatar from "react-avatar";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-sizing: border-box;
  width: 580px;
  height: 360px;
  box-shadow: ${rgba("#000", 0.1)} 0px 0px 6px 0px;
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
  /* font-family: "Poppins", sans-serif; */
  margin: 0;
  color: #9e9caa;
  font-size: 16px;
`;

export const CardHeaderActions = styled.div`
  display: flex;
  gap: 16px;

  svg {
    font-size: 26px;
    color: #a4afb7;
  }
`;
