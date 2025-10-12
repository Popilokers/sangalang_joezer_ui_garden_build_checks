import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean; bgcolor?:string;}>`
  background-color: ${({ disabled, bgcolor  }) => (disabled ? '#ccc' : bgcolor)};
  color:${({ disabled }) => (disabled ? 'black' : '#ccc')};
  cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => disabled ? '#ccc' : '#0056b3'};
  }
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

`;
