import styled from 'styled-components';

export const StyledText = styled.p<{size: string, color: string, disabled? : boolean}>`
font-size: ${props => props.size};
color: ${props => props.color};
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;