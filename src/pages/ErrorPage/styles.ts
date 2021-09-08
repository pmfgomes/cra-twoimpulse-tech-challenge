import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 128px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h1,
  h2 {
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomepageLink = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.theme.palette.primary};
  color: #fff;
  border-radius: 32px;
  padding: 8px 16px;
  transition: opacity 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: #000 0px 1px 3px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;

  &:active {
    opacity: 0.8;
  }
`;

export const title = css`
  font-size: 160px;
`;

export const subTitle = css`
  position: absolute;
  background-color: #fff;
  bottom: 15%;
  left: 30%;
`;
