import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from './TableHeader.types';

const StyledHeader = styled.thead<{color?:string; disabled?:boolean}>`
   font-weight: bold;
   opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
       & * {
      cursor: not-allowed !important;
      user-select: none !important;
    }
`;

const Header: React.FC<HeaderProps> = ({  disabled = false, children}) =>{
    return(
        <StyledHeader  disabled = {disabled}>{children} </StyledHeader>
    );

};

export default Header;