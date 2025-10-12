// Dropdown.tsx
import React from "react";
import { DropdownProps } from "./Dropdown.types";
import { Wrapper, Label, Select } from './Dropdown.styled';

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options = ['Option 1', 'Option 2', 'Option 3'],
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
