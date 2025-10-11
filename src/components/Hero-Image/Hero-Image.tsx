import React from "react";
import { HeroProps } from './Hero-Image.types';
import { StyledHero } from "./Hero-Image.styles";
import Label from "../Label";

const Hero: React.FC<HeroProps> = ({BGimage, children}) => {
    return(
        <StyledHero BGimage={BGimage}>
            <Label></Label>
            {children}
        </StyledHero>
    );
};

export default Hero;