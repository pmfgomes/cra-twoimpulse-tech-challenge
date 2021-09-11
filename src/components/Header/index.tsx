import {
  HeaderContainer,
  HeaderLink,
  HeaderContentContainer,
  LogoContainer,
  NavbarContainer,
} from "./header.styles";
import { ReactComponent as HeaderLogo } from "assets/images/logo.svg";
import { HeaderProps } from "types/components/header";

export default function Header(props: HeaderProps): React.ReactElement {
  const { color, moreLinkItems = undefined, className, navProps, ...other } = props;

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
        {moreLinkItems?.map(linkItems => linkItems)}
      </>
    );
  };

  return (
    <HeaderContainer color={color} {...other} className={className}>
      <HeaderContentContainer>
        <LogoContainer>
          <LogoContainerContent />
        </LogoContainer>
        <NavbarContainer {...navProps}>
          <Navbar />
        </NavbarContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
}
