import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Message } from "components/Layout";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 100% 130% 100%;
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
  grid-template-rows: 20% auto;
`;

export const SecondSectionMessageContainer = styled.section`
  width: 100%;
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

export const LandingPageMessage = styled(Message)`
  text-align: center;
  width: 40%;
`;

export const SecondSectionLearnMoreContainer = styled.section`
  display: flex;
`;

export const ImageLanding = styled.div`
  display: flex;
  flex: 1.5;

  background-image: url("/assets/images/img-landing.svg");
  background-repeat: no-repeat;
  background-size: contain;

  position: relative;
  left: 40px;
  bottom: 140px;
`;

export const ImageLandingInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;

  .landing-page-info-container {
    position: relative;
    top: 20%;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    top: 90px;
    left: 100px;

    background-image: url("/assets/images/circle.svg");
    background-position: bottom 0px right -350px;
    background-repeat: no-repeat;
    transform: scale(0.8);
  }
`;

export const FooterContainer = styled.section`
  grid-area: footer;
  background-color: ${props => props.theme.palette.primary};
`;
