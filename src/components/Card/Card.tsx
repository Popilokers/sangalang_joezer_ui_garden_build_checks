import React from "react";
import { CardProps } from "./Card.types";
import Label from "../Label";
import Text from "../Text";
import Img from "../Img";
import Button from "../Button";
import styled from "styled-components";

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: black 5px solid;
  width: 30vw;
  height: 30vh;
  margin: auto;
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? "grey" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Card: React.FC<CardProps> = ({
  onClick,
  disabled = false,
  bgcolor = "#007bff",
  title = "TITLE",
  subtext = "subtext",
  imagesrc = "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac",
}) => {
  return (
    <StyledCard disabled={disabled}>
      <Img src={imagesrc} />
      <Label>{title}</Label>
      <Text>{subtext}</Text>
      <Button labelOn="★" labelOff="★" onClick={onClick} bgcolor={bgcolor} />
    </StyledCard>
  );
};

export default Card;
