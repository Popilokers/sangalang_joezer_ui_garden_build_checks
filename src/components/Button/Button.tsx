import React, {useState} from "react";
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ labelOn = "On", labelOff = "Off", toggle = false }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleButtonClick = () => {
  console.log(isToggled);
  setIsToggled(prev => !prev); // toggles disabled state
};
  return (

    
    <StyledButton toggle={isToggled} onClick={handleButtonClick}>
      {isToggled? labelOff: labelOn}
    </StyledButton>
  );
};
export default Button;
