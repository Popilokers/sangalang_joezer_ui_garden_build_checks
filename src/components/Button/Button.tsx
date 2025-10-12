import React, {useState} from "react";
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({toggle = false, labelOn = "On", labelOff = "Off", bgcolor = "#007bff", onClick }) => {
  return (
    <StyledButton toggle={toggle} onClick={onClick} bgcolor = {bgcolor}>
      {toggle? labelOff: labelOn}
    </StyledButton>
  );
};
export default Button;
