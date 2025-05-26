import { render, screen } from "@testing-library/react";
import CTA from "./CTA";

describe("CTA Component", () => {
  it("should render a button with the correct text", () => {
    render(<CTA text="click" />); // ARRANGE
    const button = screen.getByText("click"); // ACT
    expect(button).toBeInTheDocument(); // ASSERT
  });
});
