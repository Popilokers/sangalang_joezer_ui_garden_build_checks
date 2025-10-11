import React from "react";
import { LabelProps } from "./Label.types";
import { StyledLabel } from "./Label.styles";

const Label: React.FC<LabelProps> = ({color = 'red', size = '20px', children}) => {
    return(
        <StyledLabel color={color} size={size}>{children}</StyledLabel>
    );
};

export default Label;