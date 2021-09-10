import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { IHeader, IHeaderNav } from "types/components/header";

export const HeaderContainer = styled.header<IHeader>`
  width: 100%;
  padding: 32px 0;
  background-color: ${props => props.color};
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 14%;
`;

export const HeaderLink = styled(NavLink)<IHeaderNav>`
  color: #fff;
  cursor: pointer;
  margin: 0 32px;
  text-decoration: none;

  &.active {
    font-weight: 600;
  }
`;
