import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { HeaderProps, IHeaderNav } from "types/components/header";

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
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
