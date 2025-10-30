import React from "react";
import { HeroProps } from "./Hero-Image.types";
import Label from "../Label";
import Text from "../Text";
import styled from "styled-components";

export const StyledHero = styled.div<{ bgimage: string; disabled?: boolean }>`
  position: relative;
  background-image: url(${({ disabled }) =>
    disabled
      ? ""
      : "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac"});
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 30vh; /* Full screen height */

  display: flex;
  justify-content: center;
  align-items: center;

  /*says its a psuedo-element (::before used for decorate)*/
  &::before {
    content: ""; /* Required to show the pseudo-element */
    position: absolute; /* Let it sit over the parent */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Covers the entire parent */
    background-color: rgba(0, 0, 0, 0.4); /* Transparent black */
    z-index: 1; /* Sit *behind* the content */
  }

  > * {
    position: relative; /* Makes it appear above the absolute overlay */
    z-index: 2; /* Higher z-index than the overlay  */
    color: white; /* Make text readable over the dark background */
    text-align: center; /* Center the text horizontally */
  }
`;

const Hero: React.FC<HeroProps> = ({
  disabled = false,
  title = "TITLE",
  subtext = "subtext",
  bgimage = "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac",
}) => {
  return (
    <StyledHero bgimage={bgimage} disabled={disabled}>
      <div>
        <Label color="white">
          {title}
          <br></br>
        </Label>

        <Text color="white">{subtext}</Text>
      </div>
    </StyledHero>
  );
};

export default Hero;
