import styled from 'styled-components';

export const StyledButton = styled.button<{ toggle?: boolean; bgcolor?:string;}>`
  background-color: ${({ toggle, bgcolor  }) => (toggle ? '#ccc' : bgcolor)};
  color:${({ toggle }) => (toggle ? 'black' : '#ccc')};
  cursor:${({toggle}) => (toggle ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ toggle }) => toggle ? '#ccc' : '#0056b3'};
  }
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

`;
