import Header from "components/Header";
import InfoFrame from "components/InfoFrame";
import { ButtonLink } from "components/Layout";
import {
  Container,
  Title,
  TopSectionContainer,
  TitleContainer,
  MiddleSectionContainer,
  Divider,
  MiddleSectionMessageContainer,
  LandingPageMessage,
  MiddleSectionLearnMoreContainer,
  BlankFlexSpace,
  ImageLandingInfoContainer,
} from "./landingPage.styles";
import faker from "faker";
import Footer from "components/Footer";
import { css } from "@emotion/react";
import { ButtonGradient } from "styles/common";

export default function LandingPage(): React.ReactElement {
  const TopSectionWithHeader = () => {
    const MESSAGE = "Make Your Team the best it can be";
    return (
      <TopSectionContainer>
        <Header
          navProps={{
            css: css`
              padding-right: 13%;
            `,
          }}
        />
        <TitleContainer>
          <Title>{MESSAGE}</Title>
          <ButtonLink to="/employees" color="secondary">
            Enter
          </ButtonLink>
        </TitleContainer>
      </TopSectionContainer>
    );
  };

  const MiddleSection = () => {
    return (
      <MiddleSectionContainer>
        <MiddleSectionMessageContainer>
          <Divider />
          <LandingPageMessage>{faker.lorem.sentence(20)}</LandingPageMessage>
        </MiddleSectionMessageContainer>
        <MiddleSectionLearnMoreContainer>
          <BlankFlexSpace />
          <ImageLandingInfoContainer>
            <InfoFrame
              title="Augmented reality"
              description={faker.lorem.paragraph(4)}
              bottomElement={<ButtonGradient color="primary">LEARN MORE</ButtonGradient>}
            />
          </ImageLandingInfoContainer>
        </MiddleSectionLearnMoreContainer>
      </MiddleSectionContainer>
    );
  };

  return (
    <Container>
      <TopSectionWithHeader />
      <MiddleSection />
      <Footer showCircles />
    </Container>
  );
}
