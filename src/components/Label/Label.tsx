import React from "react";
import { LabelProps } from "./Label.types";
import { StyledLabel } from "./Label.styles";

const Label: React.FC<LabelProps> = ({disabled = false, color = 'red', size = '20px', children}) => {
    return(
        <StyledLabel color={disabled? 'grey':color} size={size}>{disabled? 'disabled': children}</StyledLabel>
    );
};

export default Label;