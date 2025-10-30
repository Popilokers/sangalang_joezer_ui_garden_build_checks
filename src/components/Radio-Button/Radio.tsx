import React from "react";
import { RadioProps } from "./Radio.types";
import styled from "styled-components";

const Wrapper = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const Legend = styled.legend`
  font-weight: bold;
  margin-bottom: 8px;
`;

const RadioLabel = styled.label<{ selected?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ selected }) => (selected ? "red" : "transparent")};
  color: ${({ disabled }) => (disabled ? "#999" : "inherit")};
  width: 15vw;
  border: ${({ selected }) =>
    selected ? "5px solid blue" : "2px solid transparent"};
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;
const RadioButton: React.FC<RadioProps> = ({
  name,
  options = ["Option 1", "Option 2", "Option 3"],
  selectedValue,
  onChange,
  disabled = false,
  label,
}) => {
  return (
    <Wrapper>
      {label && <Legend>{label}</Legend>}
      {options.map((option) => (
        <RadioLabel
          key={option}
          selected={selectedValue === option}
          disabled={disabled}
        >
          <RadioInput
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={() => onChange(option)}
            disabled={disabled}
          />
          {option}
        </RadioLabel>
      ))}
    </Wrapper>
  );
};

export default RadioButton;
