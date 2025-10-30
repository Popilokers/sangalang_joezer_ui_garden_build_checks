import React from "react";
import { ImgProps } from "./Img.types";
import styled from "styled-components";

const StyledImg = styled.img<{
  height: string;
  width: string;
  disabled?: boolean;
}>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const StyledWrapper = styled.div<{
  height: string;
  width: string;
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
const Img: React.FC<ImgProps> = ({
  disabled = false,
  height = "8vw",
  width = "11vh",
  src = "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac",
  alt = "",
}) => {
  return (
    <StyledWrapper disabled={disabled} height={height} width={width}>
      <StyledImg
        src={disabled ? "" : src}
        alt={alt}
        height={height}
        width={width}
      ></StyledImg>
    </StyledWrapper>
  );
};

export default Img;
