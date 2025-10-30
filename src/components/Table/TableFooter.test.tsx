import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Footer from "./TableFooter";

describe("Table Footer", () => {
  it("renders the Table Footer (default)", () => {
    render(
      <table>
        <Footer disabled={false}>
          <tr>
            <td>Table Default</td>
          </tr>
        </Footer>
      </table>,
    );
    const tableElement = screen.getByRole("rowgroup");

    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle({ opacity: "1" });
  });
});

describe("Table Footer Disabled", () => {
  it("renders the Table Footer (disabled)", () => {
    render(
      <table>
        <Footer disabled={true}>
          <tr>
            <td>Table Default</td>
          </tr>
        </Footer>
      </table>,
    );
    const tableElement = screen.getByRole("rowgroup");

    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveStyle({ opacity: "0.2" });
  });
});
