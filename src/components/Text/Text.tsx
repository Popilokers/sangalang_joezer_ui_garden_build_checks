import React from "react";
import { StyledText } from "./Text.styles";
import {TextProps} from "./Text.types"

const Text: React.FC<TextProps> = ({disabled = false, color = 'blue', size = '12px', children}) => {
    return(
        <StyledText color = {disabled? 'grey' : color} size = {size}>{disabled? 'disabled' : children}</StyledText>
    );
};

export default Text;