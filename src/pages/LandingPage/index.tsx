import Header from "components/Header";
import { Button } from "components/Layout";
import {
  Container,
  Title,
  FirstSectionContainer,
  TitleContainer,
  ButtonTitleStyles,
} from "./styles";

export default function LandingPage(): React.ReactElement {
  const MESSAGE = "Make Your Team the best it can be";

  const FirstSection = () => {
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

  return (
    <Container>
      <FirstSection />
    </Container>
  );
}
