import InfoFrame from "components/InfoFrame";
import {
  FooterContainer,
  FooterContentContainer,
  RightsReservedDivider,
  RightsReservedMessage,
  SocialMediaIconLinksContainer,
} from "./footer.styles";
import { ReactComponent as ImgLogo } from "assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import FooterCategory from "./FooterCategory";

export default function Footer(props: FooterProps): React.ReactElement {
  const { showCircles = false } = props;

  const FOOTER_LOGO_DESCRIPTION =
    "Me old mucker Harry don't get shirty with me he nicked it up the kuver gutted mate spend a penny, bloke my good sir in my flat bleeding quaint.!";

  const CATEGORIES = [
    {
      title: "Company",
      items: ["Home", "Features", "Screenshots", "Pricing", "Team"],
    },
    {
      title: "Help",
      items: ["Help Center", "FAQ's", "Terms & Conditions", "Privacy", "Contacts"],
    },
    {
      title: "Solutions",
      items: ["Consumer", "Saas", "Education", "Gaming", "Financial Services"],
    },
  ];

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
        {CATEGORIES.map((category, index) => (
          <FooterCategory
            key={`category-${category.title}-${index}`}
            title={category.title}
            items={category.items}
          />
        ))}
      </FooterContentContainer>
      <RightsReservedDivider />
      <RightsReservedMessage>© indianpix | All rights reserved 2019</RightsReservedMessage>
    </FooterContainer>
  );
}
