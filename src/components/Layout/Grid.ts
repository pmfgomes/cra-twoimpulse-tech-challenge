import styled from "@emotion/styled";

export const GridCenter = styled.div`
  display: grid;
  place-items: center;
`;

export const Row = styled.div<IRow>`
  display: flex;
  flex-wrap: wrap;

  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => String(props.align)};
  justify-content: ${props => String(props.justify)};
`;

export const Col = styled.div`
  flex-grow: 1;
`;
