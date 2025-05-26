import { render, screen } from "@testing-library/react";
import MyWork from "./MyWork";

describe("MyWork Component", () => {
  it("should render a button with the correct text", () => {
    render(<MyWork />); // ARRANGE
    expect(screen.getAllByTestId("portfolio").length).toBeGreaterThanOrEqual(3); // ACT and ASSERT
  });
});
