import styled from "@emotion/styled";

export const Title = styled.h1<ITitle>`
  font-size: ${props => `${props.size}px` || "32px"};
`;
