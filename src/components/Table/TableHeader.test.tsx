import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Header from "./TableHeader";

describe("Table Header", () => {
  it("renders the Table Header (disabled)", () => {
    render(
      <table>
        <Header disabled={false}>
          <tr>
            <td>Table Default</td>
          </tr>
        </Header>
      </table>,
    );

    const tableElement = screen.getByRole("rowgroup");

    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle({ fontWeight: "bold" });
    expect(tableElement).toHaveStyle({ opacity: "1" });
  });
});

describe("Table Header", () => {
  it("renders the Table Header (disabled)", () => {
    render(
      <table>
        <Header disabled={true}>
          <tr>
            <td>Table Default</td>
          </tr>
        </Header>
      </table>,
    );

    const tableElement = screen.getByRole("rowgroup");

    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle({ fontWeight: "bold" });
    expect(tableElement).toHaveStyle({ opacity: "0.2" });
  });
});
