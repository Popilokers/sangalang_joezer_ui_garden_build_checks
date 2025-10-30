// Dropdown.tsx
import React from "react";
import { DropdownProps } from "./Dropdown.types";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 15vw;
`;

const Label = styled.label`
  font-size: 0.9rem;
`;

const Select = styled.select<{ disabled?: boolean }>`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "white")};
  color: ${({ disabled }) => (disabled ? "#999" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:focus {
    background-color: red;
    outline: 2px solid blue;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options = ["Option 1", "Option 2", "Option 3"],
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <Wrapper>
      {label && <Label htmlFor="dropdown">{label}</Label>}
      <Select
        id="dropdown"
        data-testid="dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default Dropdown;
