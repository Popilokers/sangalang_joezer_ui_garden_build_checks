import React from "react";
import { RowProps } from "./TableRow.types";
import styled from "styled-components";

export const StyledRow = styled.tr<{ color?: string; disabled?: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  ${({ disabled }) =>
    disabled &&
    `
    & * {
      cursor: not-allowed !important;
      user-select: none !important;
    }
  `}
`;

const Row: React.FC<RowProps> = ({
  color = "white",
  disabled = false,
  children,
}) => {
  return (
    <StyledRow color={color} disabled={disabled}>
      {children}{" "}
    </StyledRow>
  );
};

export default Row;
