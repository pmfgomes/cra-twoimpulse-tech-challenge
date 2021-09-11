import Header from "components/Header";
import InfoFrame from "components/InfoFrame";
import { Button } from "components/Layout";
import {
  Container,
  Title,
  TopSectionContainer,
  TitleContainer,
  ButtonTitleStyles,
  MiddleSectionContainer,
  Divider,
  MiddleSectionMessageContainer,
  LandingPageMessage,
  MiddleSectionLearnMoreContainer,
  BlankFlexSpace,
  ImageLandingInfoContainer,
  ImageLandingInfoButton,
} from "./landingPage.styles";
import faker from "faker";
import Footer from "components/Footer";
import { css } from "@emotion/react";

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
          <Button color="secondary" css={ButtonTitleStyles}>
            Enter
          </Button>
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
              bottomElement={<ImageLandingInfoButton>LEARN MORE</ImageLandingInfoButton>}
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
