import React from "react";
import { LabelProps } from "./Label.types";
import styled from 'styled-components';

const StyledLabel = styled.h1<{color : string, size : string, disabled? : boolean}>`
  font-family: "Rubik Mono One", monospace;
  font-weight: bold;
  font-style: normal;
  font-size: ${props => props.size};
  color: ${props => props.color};
  
`;

const StyledWrapper = styled.div<{disabled? : boolean}>`
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;

const Label: React.FC<LabelProps> = ({disabled = false, color = 'red', size = '20px', children}) => {
    return(
      <StyledWrapper disabled ={disabled}>

        <StyledLabel color={disabled? 'grey':color} size={size}>{disabled? 'disabled': children}</StyledLabel>

      </StyledWrapper>    
      );
};

export default Label;