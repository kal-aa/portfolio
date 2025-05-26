import { render, screen } from "@testing-library/react";
import Companies from "./Companies";

describe("Button Component", () => {
  it("should render a button", () => {
    render(<Companies />); // ARRANGE
    const text = screen.getByText((text) =>
      text.includes("I had the pleasure")
    ); // ACT
    expect(text).toBeInTheDocument(); // ASSERT
  });
});
