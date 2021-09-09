import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 100%);
  grid-template-areas: "first-section" "second-section" "footer";
`;

export const FirstSectionContainer = styled.section`
  grid-area: first-section;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: center / cover no-repeat ${props => props.theme.palette.primary}
    url("/assets/images/img-cut-landing.svg");
`;

export const TitleContainer = styled.div`
  display: grid;
  place-items: center;
  width: 27em;
  margin-top: 8rem;
  margin-right: 2rem;
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
