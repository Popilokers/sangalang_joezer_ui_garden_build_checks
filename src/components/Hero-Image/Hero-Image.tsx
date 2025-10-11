import React from "react";
import { HeroProps } from './Hero-Image.types';
import { StyledHero } from "./Hero-Image.styles";

const Hero: React.FC<HeroProps> = ({BGimage, children}) => {
    return(
        <StyledHero BGimage={BGimage}>
            {children}
        </StyledHero>
    );
};

export default Hero;