import React from "react";
import { HeroProps } from './Hero-Image.types';
import { StyledHero } from "./Hero-Image.styles";
import Label from "../Label";
import Text from "../Text";

const Hero: React.FC<HeroProps> = ({disabled = false, title = "TITLE", subtext = "subtext", bgimage = "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac"}) => {
    return(
        <StyledHero bgimage={bgimage} disabled = {disabled}>
            <div>
                <Label color = "white">{title}<br></br></Label>
                
                <Text color = "white">{subtext}</Text>  
            </div>
        </StyledHero>
    );
};

export default Hero;