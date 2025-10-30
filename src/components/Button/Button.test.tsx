import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Button from "./Button";

describe("Button component", () => {
  it("renders the button and is visible", () => {
    render(<Button />);
  });
});
