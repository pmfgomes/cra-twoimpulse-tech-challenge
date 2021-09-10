import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Message } from "components/Layout";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 100% 130% 70%;
  grid-template-areas: "top-section" "middle-section" "footer";
`;

export const TopSectionContainer = styled.section`
  grid-area: top-section;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.palette.primary};
  background-image: url("/assets/images/img-cut-landing.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

export const MiddleSectionContainer = styled.section`
  grid-area: middle-section;
  position: relative;
  display: grid;
  grid-template-rows: 20% auto;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    min-height: 100%;

    background-image: url("/assets/images/img-landing.svg");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 5% 50%;
    z-index: -1;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    min-height: 100%;

    background-image: url("/assets/images/curve.svg");
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: 70% -25%;
    z-index: -1;
  }
`;

export const MiddleSectionMessageContainer = styled.section`
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

export const MiddleSectionLearnMoreContainer = styled.section`
  display: flex;
  position: relative;
`;

export const BlankFlexSpace = styled.div`
  display: flex;
  flex: 1.5;
`;

export const ImageLandingInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;

  .info-frame-container {
    position: relative;
    top: 20%;
    left: 8px;
    width: 55%;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    min-height: 100%;

    background-image: url("/assets/images/circle.svg");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: 330% 100%;

    z-index: -1;
  }
`;

export const ImageLandingInfoButton = styled(Button)`
  padding: 12px 40px;
  background: linear-gradient(to top, #5851ea, #7061fa);
  color: #fff;
  text-transform: uppercase;
  font-family: Poppins, sans-serif;
`;
