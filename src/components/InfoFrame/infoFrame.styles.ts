import styled from "@emotion/styled";
import { Message } from "components/Layout";

export const InfoFrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 80%;
`;

export const InfoFrameTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #192549;
  font-weight: 500;
  font-size: 32px;
  font-family: Poppins, sans-serif;
`;

export const InfoFrameMessage = styled(Message)`
  text-align: left;
  width: 80%;
`;

export const InfoFrameDividerContainer = styled.div`
  display: flex;

  hr {
    margin-right: 8px;
  }
`;

export const InfoFrameDivider = styled.hr<InfoFrameDividerProps>`
  margin: 0;
  width: ${props => props.width};
  height: 3px;
  border: 0;
  background: linear-gradient(to right, #6390ff, #6323ff);
`;
