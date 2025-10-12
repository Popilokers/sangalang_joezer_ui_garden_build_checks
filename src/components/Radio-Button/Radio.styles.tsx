import styled from 'styled-components';

export const Wrapper = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export const Legend = styled.legend`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const RadioLabel = styled.label<{selected?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
   background-color: ${({ selected }) => (selected ? 'red' : 'transparent')};
  color: ${({ disabled }) => (disabled ? '#999' : 'inherit')};
  width: 15vw;
  border: ${({ selected }) => (selected ? '5px solid blue' : '2px solid transparent')};
`;

export const RadioInput = styled.input`
  margin-right: 8px;
`;