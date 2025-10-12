import styled from "styled-components";

export const StyledCard = styled.div<{disabled?:boolean}>`
border: black 5px solid;
width: 30vw;
height: 30vh;
margin: auto;
border-radius: 4px;
background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;
