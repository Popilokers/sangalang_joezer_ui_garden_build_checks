import styled from 'styled-components';

export const StyledLabel = styled.h1<{color : string, size : string}>`
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: ${({ size }) => size || '20px'};
  color: ${({ color }) => color || 'red'};
`;