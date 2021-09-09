import Header from "components/Header";
import { Button, Message } from "components/Layout";
import {
  Container,
  Title,
  FirstSectionContainer,
  TitleContainer,
  ButtonTitleStyles,
  SecondSectionContainer,
  Divider,
  SecondSectionMessageContainer,
  PageMessage,
  SecondSectionLearnMoreContainer,
  ImgLanding,
} from "./styles";

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
    const FIRST_MESSAGE =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius";
    return (
      <SecondSectionContainer>
        <SecondSectionMessageContainer>
          <Divider />
          <PageMessage>{FIRST_MESSAGE}</PageMessage>
        </SecondSectionMessageContainer>
        <SecondSectionLearnMoreContainer>
          <ImgLanding />
        </SecondSectionLearnMoreContainer>
      </SecondSectionContainer>
    );
  };

  const Footer = () => {
    return <div>Footer</div>;
  };

  return (
    <Container>
      <FirstSectionWithHeader />
      <SecondSection />
      <Footer />
    </Container>
  );
}
