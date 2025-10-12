import styled from 'styled-components';

export const StyledLabel = styled.h1<{color : string, size : string, disabled? : boolean}>`
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: ${props => props.size};
  color: ${props => props.color};
  cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;