import styled from 'styled-components';

export const StyledText = styled.p<{size: string, color: string}>`
font-size: ${({size}) => size};
color: ${({color}) => color};
`;