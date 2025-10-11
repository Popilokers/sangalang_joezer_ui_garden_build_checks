import styled from 'styled-components';

export const StyledHero = styled.div<{ BGimage : string }>`
background-image: url(${props => props.BGimage});
  width: 100vw;
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
   background-position: center;

   display: flex;           
  justify-content: center;  
  align-items: center;     
`;