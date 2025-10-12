import React, {useState} from 'react';
import { CardProps } from "./Card.types";
import { StyledCard } from './Card.styles';
import Label from '../Label';
import Text from '../Text';
import Img from '../Img';
import Button from '../Button';

const Card: React.FC<CardProps> = ({title = "TITLE", subtext = "subtext", imagesrc = "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac"}) => {
      const [isToggled, setIsToggled] = useState(false);
      const handleButtonClick = () => {
      console.log(isToggled);
      setIsToggled(prev => !prev); // toggles disabled state
      }
    return(
        <StyledCard>
            <Img src={imagesrc}/>
            <Label>{title}</Label>
            <Text>{subtext}</Text>
            <Button labelOn='★' labelOff='★' onClick={handleButtonClick}/>
        </StyledCard>
    );
};

export default Card;