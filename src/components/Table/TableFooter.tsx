import React from 'react';
import styled from 'styled-components';
import { FooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot<{ disabled?:boolean}>`
 opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;

const Footer: React.FC<FooterProps> = ({ disabled = false, children}) =>{
    return(
        <StyledFooter disabled = {disabled}>{children} </StyledFooter>
    );

};

export default Footer; 

// add opacity to header 