import React from "react";
import { StyledText } from "./Text.styles";
import {TextProps} from "./Text.types"

const Text: React.FC<TextProps> = ({color = 'blue', size = '12px', children}) => {
    return(
        <StyledText color = {color} size = {size}>{children}</StyledText>
    );
};

export default Text;