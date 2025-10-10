import React from "react";
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, toggle = false, onClick }) => {
  return (
    <StyledButton toggle={toggle} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
export default Button;
