import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Message } from "components/Layout";

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

export const SecondSectionContainer = styled.section`
  grid-area: second-section;
  display: grid;
  grid-template-rows: 30% auto;
`;

export const SecondSectionMessageContainer = styled.section`
  width: 100%;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 4em;
  margin-bottom: 32px;
  border-top: 2px solid #0036c6;
`;

export const PageMessage = styled(Message)`
  text-align: center;
  width: 40%;
`;

export const SecondSectionLearnMoreContainer = styled.section`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 60% 40%;
`;

export const ImgLanding = styled.div`
  height: 100%;
  width: 100%;

  background: center / contain no-repeat url("/assets/images/img-landing.svg");
`;
