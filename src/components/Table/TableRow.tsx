import React from 'react';
import { RowProps } from './TableRow.types';
import styled from 'styled-components';

export const StyledRow = styled.tr<{color?:string; disabled?:boolean}>`
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
    
   cursor:  ${({ disabled }) => (disabled ? 'not-allowed' :'pointer')};
`;

const Row: React.FC<RowProps> = ({color = "white", disabled = false, children}) =>{
    return(
        <StyledRow color = {color} disabled = {disabled}>{children} </StyledRow>
    );

};

export default Row;