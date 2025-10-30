import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero-Image";

describe("Hero Image", () => {
  it("renders the Hero Image", () => {
    render(
      <Hero bgimage="https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac" />,
    );
  });
});
