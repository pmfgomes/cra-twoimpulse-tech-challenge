import styled from "@emotion/styled";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)<IButton>`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 16px 70px;
  width: fit-content;
  min-width: 64px;
  border: 0;
  border-radius: 32px;
  box-shadow: none;
  font-size: 0.9em;
  font-weight: 700;
  box-sizing: border-box;

  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  background-color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.palette.primary;
      case "secondary":
        return props.theme.palette.secondary;
      default:
        return props.color || props.theme.palette.primary;
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.palette.secondary;
      case "secondary":
        return "#3d4ef4";
      default:
        return "#000";
    }
  }};

  &:hover {
    background-color: ${props => {
      switch (props.color) {
        case "primary":
          return darken(0.1, props.theme.palette.primary);
        case "secondary":
          return darken(0.1, props.theme.palette.secondary);
        default:
          return darken(0.1, props.color || props.theme.palette.primary);
      }
    }};
  }

  &:active {
    opacity: 0.5;
  }
`;
