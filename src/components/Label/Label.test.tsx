import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Label from "./Label";

describe("Label Default", () => {
  it("renders the Label (default)", () => {
    render(<Label>Label Default</Label>);
  });
});

describe("Label with colour", () => {
  it("renders the Label (color + default size)", () => {
    render(<Label color="red">Label color</Label>);
  });
});

describe("Label with size", () => {
  it("renders the Label (size + default color)", () => {
    render(<Label size="5px">Label size</Label>);
  });
});

describe("Label with size and colour", () => {
  it("renders the Label (size and color)", () => {
    render(
      <Label size="5px" color="red">
        Label size + color
      </Label>,
    );
  });
});
