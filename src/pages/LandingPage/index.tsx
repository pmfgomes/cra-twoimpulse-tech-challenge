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
  ImageLanding,
  ImageLandingInfoContainer,
  ImgCircle,
  ImgCurve,
  ImageLandingInfoButton,
} from "./landingPage.styles";
import faker from "faker";
import Footer from "components/Footer";

export default function LandingPage(): React.ReactElement {
  const TopSectionWithHeader = () => {
    const MESSAGE = "Make Your Team the best it can be";
    return (
      <TopSectionContainer>
        <Header />
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
          <ImgCurve />
          <ImageLanding />
          <ImageLandingInfoContainer>
            <InfoFrame
              title="Augmented reality"
              description={faker.lorem.paragraph(4)}
              bottomElement={<ImageLandingInfoButton>LEARN MORE</ImageLandingInfoButton>}
            />
            <ImgCircle />
          </ImageLandingInfoContainer>
        </MiddleSectionLearnMoreContainer>
      </MiddleSectionContainer>
    );
  };

  return (
    <Container>
      <TopSectionWithHeader />
      <MiddleSection />
      <Footer />
    </Container>
  );
}
