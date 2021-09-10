import Header from "components/Header";
import LandingPageInfo from "components/LandingPageInfo";
import { Button } from "components/Layout";
import {
  Container,
  Title,
  FirstSectionContainer,
  TitleContainer,
  ButtonTitleStyles,
  SecondSectionContainer,
  Divider,
  SecondSectionMessageContainer,
  LandingPageMessage,
  SecondSectionLearnMoreContainer,
  ImageLanding,
  ImageLandingInfoContainer,
  FooterContainer,
} from "./landingPage.styles";
import faker from "faker";

export default function LandingPage(): React.ReactElement {
  const FirstSectionWithHeader = () => {
    const MESSAGE = "Make Your Team the best it can be";
    return (
      <FirstSectionContainer>
        <Header />
        <TitleContainer>
          <Title>{MESSAGE}</Title>
          <Button color="secondary" css={ButtonTitleStyles}>
            Enter
          </Button>
        </TitleContainer>
      </FirstSectionContainer>
    );
  };

  const SecondSection = () => {
    return (
      <SecondSectionContainer>
        <SecondSectionMessageContainer>
          <Divider />
          <LandingPageMessage>{faker.lorem.sentence(20)}</LandingPageMessage>
        </SecondSectionMessageContainer>
        <SecondSectionLearnMoreContainer>
          <ImageLanding />
          <ImageLandingInfoContainer>
            <LandingPageInfo
              title="Augmented reality"
              description={faker.lorem.paragraph(4)}
              buttonText="LEARN MORE"
            />
          </ImageLandingInfoContainer>
        </SecondSectionLearnMoreContainer>
      </SecondSectionContainer>
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
      <FirstSectionWithHeader />
      <SecondSection />
      <Footer />
    </Container>
  );
}
