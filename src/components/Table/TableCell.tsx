import React from 'react';
import { CellProps } from './TableCell.types';
import styled from 'styled-components';

const StyledCell = styled.td<{bgcolor?:string; isHeader?:boolean; color?:string; disabled?:boolean}>`
background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')}; 
border: 2px solid black; 

&:hover {
    background-color: ${({ disabled,bgcolor }) => (disabled ? '' : bgcolor)};
    font-weight: bold;
    color: ${props => props.color}
  }
`;
const StyledWrapper = styled.div<{disabled? : boolean}>`
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;

const Cell: React.FC<CellProps> = ({ color = "white", bgcolor = "red", disabled = false, children}) =>{
    
    
    return(
        
        <StyledCell color = {color} bgcolor = {bgcolor} disabled = {disabled}>{children} </StyledCell>
    );

};

export default Cell;