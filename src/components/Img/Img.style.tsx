import styled from 'styled-components';

export const StyledImg = styled.img<{height : string, width : string, disabled? : boolean}>`
height = ${props => props.height};
width = ${props => props.width};
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};

`;