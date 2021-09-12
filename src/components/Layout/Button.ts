import styled from "@emotion/styled";
import { darken } from "polished";

export const Button = styled.button<IButton>`
  cursor: pointer;
  padding: 12px 40px;
  width: fit-content;
  min-width: 64px;
  background: 0;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  border: 0;
  border-radius: 32px;
  font-family: Poppins, sans-serif;

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
        return props.theme.palette.primary;
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
    opacity: 0.8;
  }

  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;
