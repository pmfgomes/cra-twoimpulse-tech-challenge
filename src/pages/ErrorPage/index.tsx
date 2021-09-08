import {
  ButtonContainer,
  Container,
  HomepageLink,
  MessageContainer,
  subTitle,
  title,
} from "./styles";

export default function ErrorPage(): React.ReactElement {
  return (
    <Container>
      <MessageContainer>
        <h1 css={title}>OOPS!</h1>
        <h2 css={subTitle}>PAGE NOT FOUND</h2>
      </MessageContainer>
      <ButtonContainer>
        <HomepageLink to="/">GO TO HOMEPAGE</HomepageLink>
      </ButtonContainer>
    </Container>
  );
}
