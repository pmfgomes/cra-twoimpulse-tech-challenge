import { Col, Button, Row, Title } from "components/Layout";
import { errorPageContainer, messageContainer, subTitle } from "./styles";

export default function ErrorPage(): React.ReactElement {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <div css={errorPageContainer}>
      <Row direction="column" justify="center" align="center">
        <Col css={messageContainer}>
          <Title size={160}>OOPS!</Title>
          <h2 css={subTitle}>404 - PAGE NOT FOUND</h2>
        </Col>
        <Col>
          <Button color="primary" onClick={() => handleRedirect("/")}>
            GO TO HOMEPAGE
          </Button>
        </Col>
      </Row>
    </div>
  );
}
