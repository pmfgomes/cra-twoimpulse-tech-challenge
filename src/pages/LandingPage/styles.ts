import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const FirstSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: ${props => props.theme.palette.primary};
  background-image: url("/assets/images/img-cut-landing.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleContainer = styled.div`
  display: grid;
  place-items: center;
  width: 27em;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #fff;
`;

export const ButtonTitleStyles = css`
  border-radius: 32px;
  box-shadow: none;
  color: #3d4ef4;
  font-weight: 700;
  padding: 16px 70px;
`;
