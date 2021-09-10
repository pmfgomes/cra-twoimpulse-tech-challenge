import styled from "@emotion/styled";
import { Button, Message } from "components/Layout";

export const LandingPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 80%;
`;

export const LandingPageInfoTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #192549;
  font-weight: 500;
  font-size: 32px;
  font-family: Poppins, sans-serif;
`;

export const LandingPageInfoMessage = styled(Message)`
  text-align: left;
  width: 80%;
`;

export const LandingPageInfoButton = styled(Button)`
  padding: 12px 40px;
  background: linear-gradient(to top, #5851ea, #7061fa);
  color: #fff;
  text-transform: uppercase;
  font-family: Poppins, sans-serif;
`;

export const LandingPageInfoDividerContainer = styled.div`
  display: flex;

  hr {
    margin-right: 8px;
  }
`;

export const LandingPageInfoDivider = styled.hr<LandingPageInfoDividerProps>`
  margin: 0;
  width: ${props => props.width};
  height: 3px;
  border: 0;
  background: linear-gradient(to right, #6390ff, #6323ff);
`;
