import React from "react";
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({disabled = false, labelOn = "On", labelOff = "Off", bgcolor = "#007bff", onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} bgcolor = {bgcolor}>
      {disabled? labelOff: labelOn}
    </StyledButton>
  );
};
export default Button;
