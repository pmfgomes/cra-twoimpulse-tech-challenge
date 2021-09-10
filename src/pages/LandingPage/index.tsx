import Header from "components/Header";
import LandingPageInfo from "components/LandingPageInfo";
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
  FooterContainer,
} from "./landingPage.styles";
import faker from "faker";

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
          <ImageLanding />
          <ImageLandingInfoContainer>
            <LandingPageInfo
              title="Augmented reality"
              description={faker.lorem.paragraph(4)}
              buttonText="LEARN MORE"
            />
          </ImageLandingInfoContainer>
        </MiddleSectionLearnMoreContainer>
      </MiddleSectionContainer>
    );
  };

  const Footer = () => {
    return (
      <FooterContainer>
        <div>Footer</div>
      </FooterContainer>
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
