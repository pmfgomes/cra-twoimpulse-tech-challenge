import styled from "@emotion/styled";

import { ReactComponent as SquareSvg } from "assets/images/el-1.svg";
import { ReactComponent as CurveSvg } from "assets/images/curve.svg";
import { ButtonLink } from "components/Layout";

export const HeaderButtonLink = styled(ButtonLink)`
  padding: 16px 32px;
  font-size: 14px;
`;

export const EmployeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding: 0 10%;

  width: 100%;
  height: 100%;
`;

export const EmployeeTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10% 0;

  color: ${({ theme }) => theme.palette.primary};
  font-size: 40px;
  font-weight: 600;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/el-1.svg");
    background-size: 77px;
    background-repeat: no-repeat;
    background-position-x: 6%;

    z-index: -1;
  }
`;

export const EmployeeTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: ${({ theme }) => theme.palette.primary};
  font-size: 52px;
  font-weight: 600;
  width: 100%;
  height: 100%;
`;

export const EmployeeTitleRightSquareContainer = styled.div`
  display: grid;
  justify-content: flex-end;
  width: 100%;
`;

export const RightSquare = styled(SquareSvg)`
  width: 100%;

  transform: rotate(220deg);
  z-index: -1;
`;

export const EmployeeFooter = styled.div`
  padding: 5% 0 10%;
  width: 100%;
  height: 100%;
`;

export const FooterPinkSquare = styled(SquareSvg)`
  width: 100%;
  transform: translateX(-35%) rotate(45deg);

  z-index: -1;

  rect {
    fill: #feafcb;
  }
`;

export const EmployeeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;

  width: 90%;
  height: 100%;
`;

export const NewEmployeeFormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const EmployeeCurveSvg = styled(CurveSvg)`
  position: absolute;

  transform: translateY(-35%) translateX(13%);

  z-index: -1;
`;
