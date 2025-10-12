import React from 'react';
import { CellProps } from './TableCell.types';
import styled from 'styled-components';


const StyledCell = styled.td<{
  bgcolor?: string;
  color?: string;
  disabled?: boolean;
}>`
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  border: 2px solid black;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled, bgcolor }) =>
      disabled ? 'grey' : bgcolor};
    font-weight: ${({ disabled }) => (disabled ? 'normal' : 'bold')};
    color: ${({ disabled, color }) => (disabled ? 'inherit' : color)};
  }
`;
const Cell: React.FC<CellProps> = ({ color = "white", bgcolor = "red", disabled = false, children}) =>{
    
    
    return(
        
        <StyledCell color = {color} bgcolor = {bgcolor} disabled = {disabled}>
                {children} 
        </StyledCell>
        
    );

};

export default Cell;