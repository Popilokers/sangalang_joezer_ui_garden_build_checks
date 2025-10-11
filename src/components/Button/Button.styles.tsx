import styled from 'styled-components';

export const StyledButton = styled.button<{ toggle?: boolean; }>`
  background-color: ${({ toggle }) => (toggle ? '#ccc' : '#007bff')};
  
  &:hover {
    background-color: ${({ toggle }) =>
      toggle ? '#ccc' : '#0056b3'};
  }
  
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  cursor: pointer
`;
