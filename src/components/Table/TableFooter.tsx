import React from 'react';
import styled from 'styled-components';
import { FooterProps } from './TableFooter.types';

export const StyledFooter = styled.tfoot<{ disabled?:boolean}>`
 opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
 pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; 
   cursor:  ${({ disabled }) => (disabled ? 'not-allowed' :'pointer')};
`;

const Footer: React.FC<FooterProps> = ({ disabled = false, children}) =>{
    return(
        <StyledFooter disabled = {disabled}>{children} </StyledFooter>
    );

};

export default Footer; 

// add opacity to header 