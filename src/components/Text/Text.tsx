import React from "react";
import {TextProps} from "./Text.types"
import styled from 'styled-components';

const StyledText = styled.p<{size: string, color: string, disabled? : boolean}>`
font-size: ${props => props.size};
color: ${props => props.color};
cursor:${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;
const Text: React.FC<TextProps> = ({disabled = false, color = 'blue', size = '12px', children}) => {
    return(
        <StyledText color = {disabled? 'grey' : color} size = {size}>{disabled? 'disabled' : children}</StyledText>
    );
};

export default Text;