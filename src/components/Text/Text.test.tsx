import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Text from "./Text";

describe("Text", () => {
  it("renders the Text (default)", () => {
    render(<Text>Text Default</Text>);
    const textElement = screen.getByText("Text Default");

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle("color: blue");
    expect(textElement).toHaveStyle("font-size: 12px");
  });
});

describe("Text", () => {
  it("renders the Text (disabled)", () => {
    render(<Text disabled={true}>disabled</Text>);

    const textElement = screen.getByText("disabled");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle("color: grey");
    expect(textElement).toHaveStyle("font-size: 12px");
  });
});
