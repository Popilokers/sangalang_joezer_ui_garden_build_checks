import styled from 'styled-components';

export const StyledHero = styled.div<{ BGimage: string }>`
  position: relative;
  background-image: url(${props => props.BGimage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 30vh; /* Full screen height */

  display: flex;
  justify-content: center;
  align-items: center;
  
  /*says its a psuedo-element (::before used for decorate)*/ 
  &::before {
    content: '';          /* Required to show the pseudo-element */
    position: absolute;   /* Let it sit over the parent */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;         /* Covers the entire parent */
    background-color: rgba(0, 0, 0, 0.4);   /* Transparent black */
    z-index: 1;          /* Sit *behind* the content */
  }

  > * {
    position: relative; /* Makes it appear above the absolute overlay */
    z-index: 2;         /* Higher z-index than the overlay  */
    color: white;       /* Make text readable over the dark background */
    text-align: center; /* Center the text horizontally */
  }
`;