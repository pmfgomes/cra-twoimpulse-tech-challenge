import styled from "@emotion/styled";
import { HeaderLink } from "components/Header/header.styles";
import { darken } from "polished";
import { ReactComponent as SquareSvg } from "assets/images/el-1.svg";

export const HeaderButtonLink = styled(HeaderLink)`
  border-radius: 32px;
  padding: 16px 32px;
  background-color: #fff;
  color: ${({ theme }) => theme.palette.primary};
  transition: background-color 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:active {
    background-color: ${darken(0.1, "#fff")};
  }
`;

export const EmployeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  box-sizing: border-box;

  padding: 0 10%;

  width: 100%;
  height: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    min-height: 100%;

    background-image: url("/assets/images/curve.svg");
    background-size: cover;
    background-position: 0% 90%;
    transform: translateX(10%);
    background-repeat: no-repeat;
    z-index: -1;
  }
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

    z-index: -1;
  }
`;

export const EmployeeTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: ${({ theme }) => theme.palette.primary};
  font-size: 40px;
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
  box-sizing: border-box;
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
