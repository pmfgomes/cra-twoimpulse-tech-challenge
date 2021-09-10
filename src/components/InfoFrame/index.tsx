import {
  InfoFrameContainer,
  InfoFrameDivider,
  InfoFrameDividerContainer,
  InfoFrameMessage,
  InfoFrameTitle,
} from "./infoFrame.styles";

export default function InfoFrame(props: InfoFrameProps): React.ReactElement {
  const { description, title, bottomElement, showDivider = true } = props;

  const Title = () => {
    if (typeof title === "string") {
      return <InfoFrameTitle>{title}</InfoFrameTitle>;
    }

    return <>{title}</>;
  };

  const Dividers = () => {
    if (!showDivider) {
      return null;
    }

    return (
      <InfoFrameDividerContainer>
        <InfoFrameDivider width="40px" />
        <InfoFrameDivider width="100px" />
      </InfoFrameDividerContainer>
    );
  };

  const Description = () => {
    if (typeof description === "string") {
      return <InfoFrameMessage>{description}</InfoFrameMessage>;
    }

    return <>{description}</>;
  };

  return (
    <InfoFrameContainer className="info-frame-container">
      <Title />
      <Dividers />
      <Description />
      {bottomElement}
    </InfoFrameContainer>
  );
}
