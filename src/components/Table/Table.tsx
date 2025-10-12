import React, { ReactElement } from 'react';
import { TableProps } from './Table.types';
import styled from 'styled-components';

export const StyledTable = styled.table<{  disabled?: boolean }>`
   
   border-collapse: ${({ disabled }) => (disabled ? 'separate' : 'collapse')};
   pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
   opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
   cursor:  ${({ disabled }) => (disabled ? 'not-allowed' :'pointer')};
`;

const Table: React.FC<TableProps> = ({ children, color = "white", disabled = false  }) => {

 return (
    <StyledTable  disabled={disabled}>
      {children}
    </StyledTable>
  );
};

export default Table;