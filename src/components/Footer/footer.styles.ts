import styled from "@emotion/styled";

export const FooterContainer = styled.section<FooterProps>`
  grid-area: footer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(to top, #5851ea, #7061fa);
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    background-image: url("/assets/images/curve-1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    z-index: -1;
  }

  ${({ showCircles }) =>
    showCircles &&
    `
    &::after {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    background-image: url("/assets/images/circle-footer.svg");
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
  `}
`;

export const FooterContentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 128px;

  .info-frame-container {
    padding-top: 8px;
    margin-right: 64px;
    width: 335px;
    row-gap: 8px;
    text-align: left;

    p {
      color: #fff;
      font-family: "Poppins", sans-serif;
    }
  }
`;

export const SocialMediaIconLinksContainer = styled.div`
  display: flex;
  gap: 48px;
  color: #fff;

  svg {
    font-size: 28px;
  }
`;

export const RightsReservedDivider = styled.hr`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  border: 0;
  height: 2px;
  background-color: #9da3e2;
  margin: 64px 0;
`;

export const RightsReservedMessage = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #fff;
  margin: 0;
`;
