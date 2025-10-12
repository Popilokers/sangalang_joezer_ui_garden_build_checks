import React from 'react';
import { StyledImg } from './Img.style';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({height = '100vw', width = '145vh', src = 'https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac', alt =''}) => {
    return(
        <StyledImg src = {src} alt = {alt} height={height} width = {width}></StyledImg>
    );
};

export default Img;