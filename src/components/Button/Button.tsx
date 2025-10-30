import React from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";

const StyledButton = styled.button<{ disabled?: boolean; bgcolor?: string }>`
  background-color: ${({ disabled, bgcolor }) => (disabled ? "#ccc" : bgcolor)};
  color: ${({ disabled }) => (disabled ? "black" : "#ccc")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
`;

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  labelOn = "On",
  labelOff = "Off",
  bgcolor = "#007bff",
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} bgcolor={bgcolor}>
      {disabled ? labelOff : labelOn}
    </StyledButton>
  );
};
export default Button;
