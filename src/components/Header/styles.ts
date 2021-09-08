import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IHeader, IHeaderNav } from "types/components/header";

export const HeaderContainer = styled.div<IHeader>`
  width: 100%;
  padding: 32px;
  background-color: ${props => props.color};
`;

export const HeaderLink = styled(Link)<IHeaderNav>`
  color: #fff;
  font-weight: ${props => props.selected && "600"};
`;
