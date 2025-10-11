import styled from 'styled-components';

export const StyledImg = styled.img<{height : string, width : string}>`
height = ${({height}) => height};
width = ${({width}) => width};
`;