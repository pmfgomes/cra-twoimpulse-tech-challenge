import {
  LandingPageInfoButton,
  LandingPageInfoContainer,
  LandingPageInfoDivider,
  LandingPageInfoDividerContainer,
  LandingPageInfoMessage,
  LandingPageInfoTitle,
} from "./landingPageInfo.styles";

export default function LandingPageInfo(props: LandingPageInfoProps): React.ReactElement {
  const { description, title, buttonText } = props;

  return (
    <LandingPageInfoContainer className="landing-page-info-container">
      <LandingPageInfoTitle>{title}</LandingPageInfoTitle>
      <LandingPageInfoDividerContainer>
        <LandingPageInfoDivider width="40px" />
        <LandingPageInfoDivider width="100px" />
      </LandingPageInfoDividerContainer>
      <LandingPageInfoMessage>{description}</LandingPageInfoMessage>
      <LandingPageInfoButton>{buttonText}</LandingPageInfoButton>
    </LandingPageInfoContainer>
  );
}
