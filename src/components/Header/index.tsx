import { HeaderContainer, HeaderLink } from "./styles";
import { Row, Col } from "components/Layout";
import { ReactComponent as Logo } from "assets/images/logo.svg";

interface HeaderProps {
  color?: string;
}

export default function Header(props: HeaderProps): React.ReactElement {
  const { color = "transparent" } = props;

  const LEFT_ITEMS: JSX.Element[] = [<Logo key="logo" fill="#000" />];
  const RIGHT_ITEMS: JSX.Element[] = [];

  return (
    <HeaderContainer color={color}>
      <Row>
        <Col>{LEFT_ITEMS.map(item => item)}</Col>
        <Col>{RIGHT_ITEMS.map(item => item)}</Col>
      </Row>
    </HeaderContainer>
  );
}
