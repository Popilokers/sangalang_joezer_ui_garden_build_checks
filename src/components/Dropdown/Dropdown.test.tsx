import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = ["Option A", "Option B", "Option C"];

  it("renders all options", () => {
    render(
      <Dropdown
        label="Test Dropdown"
        options={options}
        value="Option A"
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText("Test Dropdown")).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  it("calls onChange when a new option is selected", () => {
    const onChange = jest.fn();

    render(
      <Dropdown
        label="Test Dropdown"
        options={options}
        value="Option A"
        onChange={onChange}
      />,
    );

    const select = screen.getByTestId("dropdown");
    fireEvent.change(select, { target: { value: "Option B" } });

    expect(onChange).toHaveBeenCalledWith("Option B");
  });

  it("respects the disabled prop", () => {
    const onChange = jest.fn();

    render(
      <Dropdown
        label="Disabled Dropdown"
        options={options}
        value="Option A"
        onChange={onChange}
        disabled
      />,
    );

    const select = screen.getByTestId("dropdown");

    expect(select).toBeDisabled();
    expect(select).toHaveStyleRule("cursor", "not-allowed");
    expect(select).toHaveStyleRule("background-color", "#f0f0f0");
  });
});
