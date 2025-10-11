import React from 'react';
import { StyledImg } from './Img.style';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({height = '100vw', width = '145vh', src = '', alt =''}) => {
    return(
        <StyledImg src = {src} alt = {alt} height={height} width = {width}></StyledImg>
    );
};

export default Img;