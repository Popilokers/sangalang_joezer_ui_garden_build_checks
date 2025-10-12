import React from 'react';
import styled from 'styled-components';
import { FooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot<{ disabled?:boolean}>`
 opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
 
 
  ${({ disabled }) =>
    disabled &&
    `
    & * {
      cursor: not-allowed !important;
      user-select: none !important;
    }
  `}
`;
const Footer: React.FC<FooterProps> = ({ disabled = false, children}) =>{
    return(
       
            
        <StyledFooter disabled = {disabled}>{children} </StyledFooter>
        
    );

};

export default Footer; 

// add opacity to header 