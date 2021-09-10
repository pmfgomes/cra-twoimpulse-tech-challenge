import InfoFrame from "components/InfoFrame";
import {
  FooterContainer,
  FooterContentContainer,
  SocialMediaIconLinksContainer,
} from "./footer.styles";
import { ReactComponent as ImgLogo } from "assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";

export default function Footer(props: FooterProps): React.ReactElement {
  const { showCircles = false } = props;

  const FOOTER_LOGO_DESCRIPTION =
    "Me old mucker Harry don't get shirty with me he nicked it up the kuver gutted mate spend a penny, bloke my good sir in my flat bleeding quaint.!";

  const SocialMediaIcons = () => (
    <SocialMediaIconLinksContainer className="social-media-icons">
      <FaFacebookF />
      <FaTwitter />
      <FaDribbble />
      <FaLinkedinIn />
    </SocialMediaIconLinksContainer>
  );

  return (
    <FooterContainer showCircles={showCircles}>
      <FooterContentContainer>
        <InfoFrame
          title={<ImgLogo />}
          showDivider={false}
          description={FOOTER_LOGO_DESCRIPTION}
          bottomElement={<SocialMediaIcons />}
        />
      </FooterContentContainer>
    </FooterContainer>
  );
}
