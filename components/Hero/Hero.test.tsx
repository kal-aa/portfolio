import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("should render a button with the correct text", () => {
    render(<Hero />); // ARRANGE
    expect(screen.getByText(/I’m Kalab/i)).toBeInTheDocument(); // ACT and ASSERT
  });
});
