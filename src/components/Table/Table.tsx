import React, { ReactElement } from 'react';
import { TableProps } from './Table.types';
import styled from 'styled-components';

const StyledTable = styled.table<{  disabled?: boolean }>`
   
   border-collapse: ${({ disabled }) => (disabled ? 'separate' : 'collapse')};
   opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;

const StyledWrapper = styled.div<{disabled? : boolean}>`
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;

const Table: React.FC<TableProps> = ({ children, color = "white", disabled = false  }) => {

 return (
  <StyledWrapper disabled={disabled}>
    <StyledTable  disabled={disabled}>
      {children}
    </StyledTable>
  </StyledWrapper>
  );
};

export default Table;