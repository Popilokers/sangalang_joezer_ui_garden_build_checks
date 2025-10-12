import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 15vw;
`;

export const Label = styled.label`
  font-size: 0.9rem;
`;

export const Select = styled.select<{ disabled?: boolean }>`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
  color: ${({ disabled }) => (disabled ? '#999' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;