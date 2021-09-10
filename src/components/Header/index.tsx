import {
  HeaderContainer,
  HeaderLink,
  HeaderContentContainer,
  LogoContainer,
  NavbarContainer,
  BlankElement,
} from "./header.styles";
import { ReactComponent as HeaderLogo } from "assets/images/logo.svg";

interface HeaderProps {
  color?: string;
  showAddEmployee?: boolean;
}

export default function Header(props: HeaderProps): React.ReactElement {
  const { color = "transparent", showAddEmployee = false } = props;

  const LogoContainerContent = () => {
    return <HeaderLogo key="logo" fill="#000" />;
  };

  const Navbar = () => {
    return (
      <>
        <HeaderLink to="/" exact>
          Home
        </HeaderLink>
        <HeaderLink to="/absences" exact>
          Absences
        </HeaderLink>
        <HeaderLink to="/employees" exact>
          Employees
        </HeaderLink>
        {showAddEmployee ? (
          <HeaderLink to="/new-employee" exact>
            New Employee
          </HeaderLink>
        ) : (
          <BlankElement />
        )}
      </>
    );
  };

  return (
    <HeaderContainer color={color}>
      <HeaderContentContainer>
        <LogoContainer>
          <LogoContainerContent />
        </LogoContainer>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
}
