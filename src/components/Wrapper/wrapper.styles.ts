import styled from "@emotion/styled";
import Header from "components/Header";

export const WrapperContainer = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 11% auto 70%;
  grid-template-areas: "header" "content" "footer";
`;

export const WrapperHeaderContainer = styled.section`
  grid-area: header;
  width: 100%;
  height: 100%;
`;

export const WrapperHeader = styled(Header)`
  background-image: linear-gradient(to top, #5851ea, #7061fa);
`;

export const WrapperContentContainer = styled.section`
  grid-area: content;
  width: 100%;
  height: 100%;
`;
