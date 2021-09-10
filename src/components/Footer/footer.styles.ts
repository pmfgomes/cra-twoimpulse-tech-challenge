import styled from "@emotion/styled";

export const FooterContainer = styled.section<FooterProps>`
  grid-area: footer;
  position: relative;
  background-image: linear-gradient(to top, #5d4ce4, #7660f5);
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
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
    height: 100%;
    background-image: url("/assets/images/circle-footer.svg");
    background-repeat: no-repeat;
    background-position: 110% 10%;

    z-index: -1;
  }
  `}
`;

export const FooterContentContainer = styled.div`
  display: flex;
  padding: 128px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  .info-frame-container {
    width: 28%;
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
  justify-content: space-between;
  width: 300px;

  color: #fff;
  svg {
    font-size: 28px;
  }
`;
